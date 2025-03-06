import React, { Component } from "react";
import Layout from "@/components/Layout";
import QuestionItem from "@/components/QuestionItem";
import QuestionResult from "@/components/QuestionResult";
import questionData from "@/data/questionADHD.json";

class ADHD extends Component {
  state = {
    answers: {},
    showModal: false,
    score: 0,
  };

  handleRadioChange = (questionId, value) => {
    this.setState((prevState) => ({
      answers: {
        ...prevState.answers,
        [questionId]: parseInt(value),
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const answeredQuestions = Object.keys(this.state.answers).length;
    const requiredQuestions = questionData.questionADHD.filter(
      (q) => q.id !== 0,
    ).length;

    if (answeredQuestions < requiredQuestions) {
      alert("请完成量表所有问题的作答");
      return;
    }

    const totalScore = Object.values(this.state.answers).reduce(
      (sum, val) => sum + val,
      0,
    );

    this.setState({
      score: totalScore,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Layout
        title="成人 ADHD 自填量表 (ASRS) | 青衫 Neuro"
        description="ADHD多动症成人测试量表，用于测试成年人的多动症情况。"
      >
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                成人 ADHD 自填量表 (ASRS)
              </h1>
              <p className="text-gray-500 mt-2">焦虑抑郁等都可能造成分值偏高</p>
              <p className="text-sm text-gray-400 mt-1">
                18Q-Chinese-Traditional.pdf
              </p>
            </div>

            <form className="space-y-8" onSubmit={this.handleSubmit}>
              <div className="space-y-6">
                {questionData.questionADHD.map((question) => (
                  <QuestionItem
                    key={question.id}
                    question={question}
                    degree={["经常这样", "从来没有"]}
                    onAnswerChange={this.handleRadioChange}
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20"
              >
                提交答案
              </button>
            </form>
          </div>

          <QuestionResult
            score={this.state.score}
            showModal={this.state.showModal}
            onClose={this.closeModal}
          />
        </main>
      </Layout>
    );
  }
}

export default ADHD;
