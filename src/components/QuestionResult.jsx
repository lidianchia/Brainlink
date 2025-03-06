import React, { Component } from "react";
import "remixicon/fonts/remixicon.css";

class QuestionResult extends Component {
  getResultText() {
    const { score } = this.props;
    if (score >= 12) {
      return "您的得分较高，建议进一步咨询专业医生获取专业建议。";
    } else if (score >= 8) {
      return "您的得分中等，如有困扰建议咨询专业医生。";
    } else {
      return "您的得分较低，暂时无需过分担心。";
    }
  }

  render() {
    const { score, showModal, onClose } = this.props;

    if (!showModal) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black/60" onClick={onClose}></div>
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900">量表结果</h3>
            <button
              className="text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-green-600/10 to-indigo-600/10">
              <div>
                <h4 className="text-sm font-medium text-gray-500">A部分</h4>
                <p className="text-lg font-semibold mt-1">注意力障碍</p>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">
                {score}
              </div>
            </div>

            <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-green-600/10 to-indigo-600/10">
              <div>
                <h4 className="text-sm font-medium text-gray-500">B部分</h4>
                <p className="text-lg font-semibold mt-1">多动/冲动障碍</p>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">
                {score}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center mb-3">
                <i className="ri-mental-health-line text-green-500 text-xl mr-2"></i>
                <h3 className="text-lg font-semibold">测试结果表示</h3>
              </div>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                {this.getResultText()}
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <i className="ri-information-line text-yellow-500 mr-2"></i>
                <span className="text-sm font-medium text-yellow-800">
                  注意事项
                </span>
              </div>
              <div className="text-sm text-yellow-700 space-y-1">
                <p>* 本测试仅供参考，不能作为诊断依据</p>
                <p>* 如有困扰建议及时就医咨询</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionResult;
