"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import Image from "next/image";

// =================================================================
// 1. CONFIGURACIÓN DE MENSAJES PERSUASIVOS (25+ mensajes)
// =================================================================

const PERSUASIVE_PLAYLIST = [
  // Urgencia y Escasez
  {
    text: "⏳ ¡Últimos cupos! Las reservas para el tour de 3 días se cierran pronto. ¿Aseguras tu fecha?",
    trigger: "entry",
  },
  {
    text: "🔥 Alta temporada en el Cocuy. Si reservas ahora, evitas quedarte sin el guía que necesitas. ¡Te espero!",
    trigger: "entry",
  },
  {
    text: "🎁 Reserva HOY y recibe una guía digital de supervivencia en páramos (Valor: $15 USD). ¡Solo para los 10 primeros!",
    trigger: "entry",
  },
  {
    text: "⏰ ¡Alerta! Varios viajeros están preguntando por tu fecha. Contáctame si quieres asegurar tu cupo.",
    trigger: "entry",
  },
  {
    text: "🛑 ¿Ya te vas? No pierdas la oportunidad de preguntar por el Pico Pan de Azúcar. ¡Es nuestra cumbre más solicitada!",
    trigger: "exit",
  },

  // Experiencia y Valor
  {
    text: "🏔️ ¿Quieres una experiencia que vaya más allá del trekking? Te ofrezco un viaje de sanación espiritual y conexión U'wa.",
    trigger: "entry",
  },
  {
    text: "🤝 Soy guía nativo de Güicán. Conmigo, no solo caminas, ¡vives la montaña con ojos locales!",
    trigger: "entry",
  },
  {
    text: "🌟 Con 7 años de experiencia y cero incidentes, tu seguridad es mi máxima prioridad. ¡Viaja tranquilo!",
    trigger: "entry",
  },
  {
    text: "📸 ¿Sabías que el Cocuy es un paraíso fotográfico? Te llevo a los puntos con las mejores vistas al amanecer.",
    trigger: "entry",
  },
  {
    text: "🎒 ¿Necesitas equipo? Te asesoro gratis sobre el kit completo para la alta montaña. ¡Pregúntame!",
    trigger: "entry",
  },

  // Cultura y Profundidad
  {
    text: "✨ La Sierra Nevada es 'Zizuma' (Ser Sagrado) para la cultura U'wa. ¿Quieres entender su cosmovisión? Te la explico.",
    trigger: "entry",
  },
  {
    text: "🌱 Mis tours respetan los senderos ancestrales y la cosmovisión U'wa. ¡Un turismo consciente es posible!",
    trigger: "entry",
  },
  {
    text: "🗺️ ¿Buscas rutas menos exploradas? Te llevo a rincones donde la historia y la naturaleza se sienten más vivas.",
    trigger: "entry",
  },
  {
    text: "💧 El agua del páramo es fuente de vida. Conoce los rituales de agradecimiento U'wa durante tu viaje.",
    trigger: "entry",
  },
  {
    text: "📚 ¿Curioso sobre los Frailejones? Te contaré su función vital en este ecosistema único. ¡Te sorprenderás!",
    trigger: "entry",
  },

  // Llamada a la Acción Directa
  {
    text: "💬 ¿Tienes dudas sobre la aclimatación o altitud? ¡Es importante! Escríbeme ahora y te las resuelvo.",
    trigger: "exit",
  },
  {
    text: "💵 ¿Cómo planear tu presupuesto? Te envío un desglose claro de costos sin compromiso.",
    trigger: "exit",
  },
  {
    text: "✅ Tienes dos mensajes de bienvenida sin leer en el chat. Dale clic y obtén la info clave para empezar.",
    trigger: "entry",
  },
  {
    text: "📅 ¿Ya revisaste las fechas disponibles? Contáctame para coordinar el mejor momento para tu aventura.",
    trigger: "exit",
  },
  {
    text: "💬 ¿Por qué esperar? Enviar un mensaje de WhatsApp es el primer paso hacia una de las mejores experiencias de tu vida. 😉",
    trigger: "entry",
  },

  // Reinforcing Urgency / Exit
  {
    text: "🤔 ¿Aún pensando en el Nevado? Pregúntame sobre el sendero Laguna Grande de la Sierra. ¡Es espectacular!",
    trigger: "exit",
  },
  {
    text: "⚡️ ¡No dejes que tu aventura se quede en la pestaña! Resuelve esa pequeña duda que te frena.",
    trigger: "exit",
  },
  {
    text: "⛰️ El camino se hace con el primer paso. Mándame un 'Hola' y empecemos a planear tu viaje al Cocuy.",
    trigger: "exit",
  },
  {
    text: "🎁 ¡Tu descuento del 10% expira en 24 horas! No lo dejes pasar, reserva tu tour ahora.",
    trigger: "entry",
  },
  {
    text: "👋 ¡Vuelve pronto! Pero si de verdad quieres ir al Cocuy, no te demores en contactar a un guía local.",
    trigger: "exit",
  },
];

// Tiempos
const ENTRY_MESSAGE_DELAY = 5000; // 5 segundos después de entrar a la página (para mensajes 'entry')
const EXIT_MESSAGE_DELAY = 40000; // 40 segundos después de cerrar el chat (para mensajes 'exit')

// Variables de colores
const whatsappDarkGreen = "#128C7E";
const neutralWhite = "#FFFFFF";

// =================================================================
// 2. COMPONENTE PRINCIPAL
// =================================================================

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);
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
  // Utilizamos un Map para llevar el registro de qué mensajes ya se mostraron al usuario actual
  const displayedMessagesRef = useRef<Map<string, number>>(new Map());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // -----------------------------------------------------------------
  // LÓGICA DE PERSUASIÓN
  // -----------------------------------------------------------------

  // Función para obtener un mensaje persuasivo no repetido del tipo deseado
  const getNextPersuasiveMessage = useCallback((trigger: "entry" | "exit") => {
    const availableMessages = PERSUASIVE_PLAYLIST.filter(
      (msg) =>
        msg.trigger === trigger && !displayedMessagesRef.current.has(msg.text)
    );

    if (availableMessages.length === 0) {
      // Si todos los mensajes del tipo ya se mostraron, reiniciamos la lista para este tipo
      const allTriggerMessages = PERSUASIVE_PLAYLIST.filter(
        (msg) => msg.trigger === trigger
      );
      allTriggerMessages.forEach((msg) =>
        displayedMessagesRef.current.delete(msg.text)
      );

      // Intentamos de nuevo con la lista reiniciada
      if (allTriggerMessages.length > 0) {
        return allTriggerMessages[
          Math.floor(Math.random() * allTriggerMessages.length)
        ];
      }
      return null;
    }

    // Seleccionar un mensaje aleatorio de los disponibles
    return availableMessages[
      Math.floor(Math.random() * availableMessages.length)
    ];
  }, []);

  // Función para añadir un mensaje persuasivo al chat
  const addPersuasiveMessage = useCallback(
    (messageObject: { text: string; trigger: string }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: messageObject.text, sender: "bot" },
      ]);
      setUnreadCount((prevCount) => prevCount + 1);

      // Marcar el mensaje como mostrado para evitar repetición inmediata
      displayedMessagesRef.current.set(messageObject.text, Date.now());
    },
    []
  );

  // useEffect principal para manejar timers de entrada y salida
  useEffect(() => {
    // 1. Limpieza de timers al inicio y al desmontar
    if (timerRef.current) clearTimeout(timerRef.current);

    // 2. Lógica de Activación de Mensajes

    // --- Lógica de Entrada (5 segundos después de cargar la página, si no se ha abierto) ---
    if (!isOpen) {
      timerRef.current = setTimeout(() => {
        if (!isOpen) {
          const nextMessage = getNextPersuasiveMessage("entry");
          if (nextMessage) {
            addPersuasiveMessage(nextMessage);
          }
        }
      }, ENTRY_MESSAGE_DELAY);
    }

    // --- Lógica de Salida (40 segundos después de cerrar el chat, si está cerrado) ---
    if (!isOpen) {
      timerRef.current = setTimeout(() => {
        if (!isOpen) {
          const nextMessage = getNextPersuasiveMessage("exit");
          if (nextMessage) {
            addPersuasiveMessage(nextMessage);
          }
        }
      }, EXIT_MESSAGE_DELAY);
    }

    // 3. Limpiar al desmontar
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, addPersuasiveMessage, getNextPersuasiveMessage]);
  // -----------------------------------------------------------------

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState) {
      // Al abrir el chat
      setUnreadCount(0);
      // Limpiar cualquier temporizador pendiente de persuasión
      if (timerRef.current) clearTimeout(timerRef.current);
    } else {
      // Al cerrar el chat, reactivar el timer de salida (se reiniciará en el useEffect)
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Enviar a WhatsApp
    const phoneNumber = "573114434181";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      inputValue
    )}`;
    window.open(whatsappLink, "_blank");

    setInputValue("");
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Scroll automático al último mensaje
  const chatBodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Botón Flotante */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 left-6 z-50 p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        style={{
          backgroundColor: "transparent",
        }}
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
                    src="/Guia.webp" // Reemplaza con una imagen de tu guía o logo
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
            <div
              ref={chatBodyRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50"
            >
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
