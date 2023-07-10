import { useState } from "react";
import "./App.css";

const questions = [
  {
    id: 1,
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plans",
  },
  {
    id: 2,
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: 4,
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: 5,
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-tw-violet to-tw-blue font-primary grid place-items-center px-5">
      <main className="bg-white w-full rounded-3xl p-5 drop-shadow-2xl my-40 lg:m-0 lg:flex lg:max-w-4xl lg:items-center lg:justify-between relative">
        <picture className="transform -translate-y-[7.5rem] block -mb-[7.5rem] lg:mb-0 lg:transform-none px-8 lg:px-0">
          <source
            media="(max-width: 761px)"
            srcSet="./images/illustration-woman-online-mobile.svg"
          />
          <source
            media="(min-width: 762px)"
            srcSet="./images/illustration-woman-online-desktop.svg"
          />

          <img
            src="./images/illustration-woman-online-desktop.svg"
            alt="Illustration"
            className="img-drop-shadow lg:max-w-md lg:-translate-x-20 mx-auto"
          />

          <div className="hidden lg:block absolute top-1/2 -translate-y-1/3 -left-20 z-20">
            <img src="./images/illustration-box-desktop.svg" alt="" />
          </div>
        </picture>

        <section className="lg:flex-1 lg:pr-20 lg:py-20">
          <h1 className="font-bold text-3xl text-center text-tw-black mt-16 lg:mt-0 lg:text-left">
            FAQ
          </h1>

          <ul className="mt-5 pb-10 lg:pb-0">
            {questions.map((question) => (
              <li
                key={question.id}
                className="border-b border-tw-light-gray py-3 cursor-pointer"
                onClick={() =>
                  setSelectedId((s) => (question.id === s ? null : question.id))
                }
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`text-tw-medium-gray ${
                      question.id === selectedId && "text-black font-bold"
                    }`}
                  >
                    {question.question}
                  </p>
                  <button>
                    <img
                      src="./images/icon-arrow-down.svg"
                      alt="arrow down"
                      className={question.id === selectedId ? "rotate-180" : ""}
                    />
                  </button>
                </div>
                {question.id === selectedId && (
                  <p className="text-tw-medium-gray mt-3">{question.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
