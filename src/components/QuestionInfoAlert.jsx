import React from "react";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage } from "react-intl";

const QuestionInfoAlert = ({ showModal, onClose, content }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/60"></div>
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-semibold text-gray-900">
            <FormattedMessage id="QuestionInfoAlert.title" />
          </div>
        </div>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {content}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            <FormattedMessage id="QuestionInfoAlert.confirm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionInfoAlert;
