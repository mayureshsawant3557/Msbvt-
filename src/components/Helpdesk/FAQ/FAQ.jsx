import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Which website should be visited for student admission?",
    answer:
      "Students should visit the official MSBVET admission portal for admission-related activities.",
  },
  {
    question:
      "What is the process for obtaining duplicate mark sheet and certificate?",
    answer:
      "Students need to submit an application along with supporting documents.",
  },
  {
    question: "How to apply for new institute affiliation?",
    answer:
      "Institutes can apply through the affiliation section available on the official portal.",
  },
  {
    question:
      "How many courses are currently offered by Maharashtra State Board?",
    answer:
      "The board offers multiple vocational and skill development courses.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#f5f5f5] p-6">
      {/* Search Section */}
      <div className="flex gap-4 mb-8 text-sm">
        <input
          type="text"
          placeholder="Search FAQ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-4 py-2"
        />

        <button className="bg-yellow-400 px-8 py-2 rounded font-medium hover:bg-yellow-500">
          Search
        </button>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-[1px]">
        {filteredFaqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center bg-[#8b93ad] text-white px-5 py-4 text-left text-sm font-medium rounded"
            >
              <span>{faq.question}</span>

              {openIndex === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>

            {openIndex === index && (
              <div className="bg-white border border-gray-300 px-5 py-4 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}   