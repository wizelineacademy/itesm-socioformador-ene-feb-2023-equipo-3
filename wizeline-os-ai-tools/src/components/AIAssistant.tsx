import SmartToyIcon from "@mui/icons-material/SmartToy";
import { generateKey } from "crypto";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

// Types
interface Conversation {
  role: string;
  content: string;
}

const promptPt1 = 'enriquece el siguiente texto de descripción: "';
const propmPt2 =
  '", el texto final debe de contener un menos de 500 carácteres obligatorio, en un solo párrafo, en inglés, mantén la misma persona gramatical, escribe solo el texto no añadas descripciones ni opiniones.';

const AIAssitant = ({ aboutText }: any) => {
  const [conversation, setConversation] = useState<Conversation[]>([]);
  const [value, setValue] = useState<string>(
    "The Profile Assistant is here to help improve your profile in the generate button. Once you've written something, click generate to get a new and improved suggestion."
  );

  const handleSubmit = async () => {
    const buttonGenerate = document.getElementById("generatefirst");
    if (buttonGenerate != null) {
      // ✅ Add class
      buttonGenerate.classList.add("cursor-not-allowed");
      buttonGenerate?.setAttribute("disabled", "");
    }
    const text = promptPt1 + aboutText + propmPt2;

    const notification = toast.loading("ChatGPT is thinking...");
    const chatHistory = [...conversation, { role: "user", content: text }];
    const response = await fetch("/api/OpenAIChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: chatHistory }),
    });

    const data = await response.json();

    // Toast Notification to say succesful
    toast.success("ChatGPT has responded!", {
      id: notification,
    });
    setValue(data.result.choices[0].message.content);
    setConversation([
      ...chatHistory,
      { role: "assistant", content: data.result.choices[0].message.content },
    ]);
    const secondButtons = document.getElementById("secondButtons");

    if (buttonGenerate != null) {
      // ✅ Add class
      buttonGenerate.classList.add("hidden");
    }

    if (secondButtons != null) {
      secondButtons.classList.remove("hidden");
      secondButtons.classList.add("flex");
    }

    const buttonGenerateSecond = document.getElementById("generatesecond");
    if (buttonGenerateSecond != null) {
      // ✅ Add class
      buttonGenerateSecond.classList.add("cursor-not-allowed");
      buttonGenerateSecond?.setAttribute("disabled", "");
    }

    function showGenerateButton() {
      if (buttonGenerateSecond != null) {
        buttonGenerateSecond.classList.remove("cursor-not-allowed");
        buttonGenerateSecond?.removeAttribute("disabled");
      }
    }

    setTimeout(showGenerateButton, 5000);
  };

  const handleNewSuggestion = async () => {
    const buttonGenerate = document.getElementById("generatesecond");
    if (buttonGenerate != null) {
      // ✅ Add class
      buttonGenerate.classList.add("cursor-not-allowed");
      buttonGenerate?.setAttribute("disabled", "");
    }

    const text = promptPt1 + aboutText + propmPt2;

    const notification = toast.loading("ChatGPT is thinking...");
    const chatHistory = [...conversation, { role: "user", content: text }];
    const response = await fetch("/api/OpenAIChat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: chatHistory }),
    });

    const data = await response.json();

    // Toast Notification to say succesful
    toast.success("ChatGPT has responded!", {
      id: notification,
    });
    setValue(data.result.choices[0].message.content);
    setConversation([
      ...chatHistory,
      { role: "assistant", content: data.result.choices[0].message.content },
    ]);

    function showGenerateButton() {
      if (buttonGenerate != null) {
        buttonGenerate.classList.remove("cursor-not-allowed");
        buttonGenerate?.removeAttribute("disabled");
      }
    }

    setTimeout(showGenerateButton, 5000);
  };

  //const { setFieldValue } = useFormikContext();

  return (
    <div className="rounded-lg border border-solid border-gray-300 bg-white p-7">
      <Toaster position="top-right" />
      <div className="mb-3 ml-2 flex items-center gap-2">
        <SmartToyIcon className="content-center text-4xl" />
        <h2 className=" text-2xl font-semibold">Profile Assistant</h2>
      </div>

      <div className="textarea text-left">
        <p>{value}</p>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        id="generatefirst"
        className="mt-5 h-10 w-full rounded bg-[#e83d44] px-4 py-2 font-bold text-white hover:bg-[#ef575d]"
      >
        Generate
      </button>

      <div id="secondButtons" className="hidden gap-10">
        <button
          type="button"
          id="generatesecond"
          onClick={handleNewSuggestion}
          className="mt-5 h-10 w-1/2 rounded border  border-solid border-gray-400 bg-white p-7 px-4 py-2 font-bold text-gray-600 hover:bg-gray-400"
        >
          Generate
        </button>
        <button
          // onClick={() => setFieldValue("aboutDescription", value)}
          type="button"
          id="accept"
          className="mt-5 h-10 w-1/2 rounded bg-[#00A7E5] px-4 py-2 font-bold text-white hover:bg-[#0076b0]"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default AIAssitant;
