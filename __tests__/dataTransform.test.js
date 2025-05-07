import { transformMedicalData } from "../src/utils/dataTransform";

describe("transformMedicalData Unit Testing", () => {
  test("Transfer to medical data format", () => {
    const mockMedicalData = [
      {
        area: "省份A",
        hospitals: [
          {
            name: "A医院",
            doctors: [
              { name: "A医生", capacity: ["ADHD", "ASD"] },
              { name: "B医生", capacity: ["ADHD"] },
            ],
          },
          {
            name: "B医院",
            doctors: [{ name: "A医生", capacity: ["ADHD"] }],
          },
        ],
      },
      {
        area: "省份B",
        hospitals: [
          {
            name: "A医院",
            doctors: [{ name: "A医院", capacity: ["ADHD"] }],
          },
        ],
      },
      {
        area: "省份C",
        hospitals: [
          {
            name: "A医院",
            doctors: [{ name: "A医生", capacity: ["ASD"] }],
          },
        ],
      },
    ];

    // Test the function
    const result = transformMedicalData(mockMedicalData);

    expect(result).toEqual([
      {
        name: "省份A",
        hospitals: 2,
        doctors: 3,
        type: 1,
      },
      {
        name: "省份B",
        hospitals: 1,
        doctors: 1,
        type: 2,
      },
      {
        name: "省份C",
        hospitals: 1,
        doctors: 1,
        type: 3,
      },
    ]);
  });

  test("Empty data", () => {
    const result = transformMedicalData([]);
    expect(result).toEqual([]);
  });
});
