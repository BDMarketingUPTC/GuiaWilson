"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import Image from "next/image";

// Array de mensajes persuasivos que se enviarán secuencialmente
const persuasiveMessages = [
  "🌄 ¿Sabías que el Parque Nacional El Cocuy tiene los glaciares más grandes de Colombia? ¡Es una experiencia única!",
  "🚶‍♂️ Mis tours incluyen guía especializado, seguro y todo lo necesario para una experiencia segura e inolvidable.",
  "⏰ ¡Las reservas para este fin de semana se están agotando! Contáctame ahora para asegurar tu cupo con un 10% de descuento por reserva anticipada. 🎉",
];

// Tiempos de espera entre mensajes en milisegundos
const messageDelays = [10000, 20000, 30000];

// Variables de colores
//const whatsappGreen = "#25D366";
const whatsappDarkGreen = "#128C7E";
const neutralWhite = "#FFFFFF";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2); // Inicia con 2 mensajes no leídos
  const [messages, setMessages] = useState([
    {
      text: "¡Hola! Soy tu guía para el Parque Nacional Natural El Cocuy. ¿En qué puedo ayudarte con tu aventura? 😊",
      sender: "bot",
    },
    {
      text: "Aquí encontrarás información sobre tours, equipo necesario y recomendaciones de seguridad.",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const persuasionTimersRef = useRef<NodeJS.Timeout[]>([]);
  const [persuasionIndex, setPersuasionIndex] = useState(0);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    // Reinicia el contador de no leídos al abrir el chat
    setUnreadCount(0);
    // Reinicia la secuencia de mensajes persuasivos si el chat se abre y se cierra
    setPersuasionIndex(0);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Lógica para enviar el mensaje a WhatsApp
    const phoneNumber = "573114434181";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      inputValue
    )}`;
    window.open(whatsappLink, "_blank");

    setInputValue("");
  };

  // Lógica para el envío secuencial de mensajes persuasivos
  useEffect(() => {
    // Si el chat está cerrado, iniciar la secuencia de mensajes
    if (!isOpen && persuasionIndex < persuasiveMessages.length) {
      // Limpiar temporizadores anteriores para evitar duplicados
      persuasionTimersRef.current.forEach(clearTimeout);
      persuasionTimersRef.current = [];

      const timer = setTimeout(() => {
        // Si el chat sigue cerrado, añade el siguiente mensaje
        if (!isOpen) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: persuasiveMessages[persuasionIndex], sender: "bot" },
          ]);
          setUnreadCount((prevCount) => prevCount + 1); // Incrementa el contador
          setPersuasionIndex((prevIndex) => prevIndex + 1); // Pasa al siguiente mensaje
        }
      }, messageDelays[persuasionIndex]);

      persuasionTimersRef.current.push(timer);
    } else if (isOpen) {
      // Limpiar todos los temporizadores al abrir el chat
      persuasionTimersRef.current.forEach(clearTimeout);
      persuasionTimersRef.current = [];
    }

    // Limpiar temporizadores al desmontar el componente
    return () => {
      persuasionTimersRef.current.forEach(clearTimeout);
    };
  }, [isOpen, persuasionIndex]);

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Botón Flotante */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 left-6 z-50 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <Image
          src="/iconoWhatsap.png"
          alt="WhatsApp Icono"
          width={50}
          height={50}
        />
        <AnimatePresence>
          {unreadCount > 0 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-0 right-0 h-6 w-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center -mt-1 -mr-1"
            >
              {unreadCount > 9 ? "+9" : unreadCount}
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Modal de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-24 left-6 z-50 w-[90%] max-w-sm h-96 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Encabezado del chat */}
            <div
              className="flex items-center justify-between p-4"
              style={{ backgroundColor: whatsappDarkGreen }}
            >
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 bg-white">
                  <Image
                    src="/Guia.png" // Reemplaza con una imagen de tu guía o logo
                    alt="Wilson Correa"
                    width={40}
                    height={30}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-lg">
                    Wilson Correa
                  </span>
                  <span className="text-xs text-gray-200">En línea</span>
                </div>
              </div>
              <button onClick={handleToggle}>
                <X size={24} color={neutralWhite} />
              </button>
            </div>

            {/* Cuerpo del chat con mensajes */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
              <AnimatePresence>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={messageVariants}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2 rounded-lg text-sm shadow-sm ${
                        msg.sender === "user"
                          ? "bg-green-500 text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Área de entrada */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-transparent outline-none text-gray-800"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 rounded-full transition-colors hover:opacity-80"
                  style={{ color: whatsappDarkGreen }}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
