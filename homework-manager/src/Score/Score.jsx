import React, { useState, useMemo, useEffect } from "react";
import { BarChart3, Plus, Trash2, TrendingUp, Award } from "lucide-react";
import "./Score.css";
import Grid from "@mui/material/Grid";
import Sidebar from "../Sidebar.jsx";
import gradesData from "../Data/Score.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Score() {
  const [grades, setGrades] = useState(gradesData);

  const [scoreIndex, setScoreIndex] = useState([]);

  const [newGrade, setNewGrade] = useState({ id: "", score: "" });

  const [showAddForm, setShowAddForm] = useState(false);

  // 计算统计数据
  const statistics = useMemo(() => {
    if (grades.length === 0)
      return { average: 0, highest: 0, lowest: 0, total: 0 };

    const EnglishScores = grades.find((g) => g.id === "English")?.score || [];
    console.log("EnglishScores: ", EnglishScores);
    const EnglishTotal = EnglishScores.reduce((sum, score) => sum + score, 0);
    const EnglishAv =
      Math.round((EnglishTotal / EnglishScores.length) * 10) / 10;
    console.log("EnglishAv: ", EnglishAv);

    const MathScores = grades.find((g) => g.id === "Math")?.score || [];
    const MathTotal = MathScores.reduce((sum, score) => sum + score, 0);
    const MathAv = Math.round((MathTotal / MathScores.length) * 10) / 10;
    console.log("MathScores: ", MathScores);

    const PhysicsScores = grades.find((g) => g.id === "Physics")?.score || [];
    const PhysicsTotal = PhysicsScores.reduce((sum, score) => sum + score, 0);
    const PhysicsAv =
      Math.round((PhysicsTotal / PhysicsScores.length) * 10) / 10;
    console.log("PhysicsScores: ", PhysicsScores);

    const ProgrammingScore =
      grades.find((g) => g.id === "Programming")?.score || [];
    const ProgrammingTotal = ProgrammingScore.reduce(
      (sum, score) => sum + score,
      0
    );
    const ProgrammingAv =
      Math.round((ProgrammingTotal / ProgrammingScore.length) * 10) / 10;
    console.log("ProgrammingScore: ", ProgrammingScore);

    const ChemicalScore = grades.find((g) => g.id === "Chemical")?.score || [];
    const ChemicalTotal = ChemicalScore.reduce((sum, score) => sum + score, 0);
    const ChemicalAv =
      Math.round((ChemicalTotal / ChemicalScore.length) * 10) / 10;
    console.log("ChemicalScore: ", ChemicalScore);

    const allGrades = [
      ...EnglishScores,
      ...MathScores,
      ...PhysicsScores,
      ...ProgrammingScore,
      ...ChemicalScore,
    ];

    console.log("all: ", allGrades);

    return {
      EnglishAv,
      MathAv,
      PhysicsAv,
      ProgrammingAv,
      ChemicalAv,
      allGrades,
    };
  }, [grades]);

  // 计算等级分布
  const gradeDistribution = useMemo(() => {
    const distribution = {
      "A (90-100)": 0,
      "B (80-89)": 0,
      "C (70-79)": 0,
      "D (60-69)": 0,
      "F (0-59)": 0,
    };

    statistics.allGrades.forEach((grade) => {
      if (grade >= 90) distribution["A (90-100)"]++;
      else if (grade >= 80) distribution["B (80-89)"]++;
      else if (grade >= 70) distribution["C (70-79)"]++;
      else if (grade >= 60) distribution["D (60-69)"]++;
      else distribution["F (0-59)"]++;
    });

    return distribution;
  }, [grades]);

  // useMemo 是 React Hook，它的作用是：缓存（memoize）计算结果，只有当依赖项变化时才重新计算，从而避免不必要的重复计算、提高性能。
  // 当依赖项（这里是 [grades]）没变时，useMemo 不会重新运行函数。
  // 它会直接返回上一次计算过、缓存好的值。
  // 只有当依赖项变化（比如 grades 变了）时，才会重新执行里面的函数。

  const maxCount = Math.max(...Object.values(gradeDistribution));

  const addGrade = () => {
    const score = parseInt(newGrade.score);
    // string转换int，ex: '88' -> 88
    if (newGrade.id && score >= 0 && score <= 100) {
      const existingId = grades.findIndex((g) => g.id === newGrade.id);
      // findIndex找科, ex: 要找的科目是Math, 用findindex() 找到id: 'Math'

      if (existingId !== -1) {
        const updatedGrades = [...grades];
        // [...grades] 复制现有的grades数组
        updatedGrades[existingId].score.push(score);
        // 在复制的数组中(updatedGrades)，找到对应的科目(existingId)，把新的分数push进去
        setGrades(updatedGrades);
        // 更新状态(grades)
        setNewGrade({ id: "", score: "" });
        // 把newGrade清空，为下次输入做准备
        setShowAddForm(false);
        // 关闭添加表单
      }
    }
  };

  const deleteGrade = (id) => {
    setGrades(grades.filter((grade) => grade.id !== id));
  };

  const getGradeColor = (score) => {
    if (score >= 90) return "grade-a";
    if (score >= 80) return "grade-b";
    if (score >= 70) return "grade-c";
    if (score >= 60) return "grade-d";
    return "grade-f";
  };

  const getBarColor = (label) => {
    if (label.startsWith("A")) return "bar-a";
    if (label.startsWith("B")) return "bar-b";
    if (label.startsWith("C")) return "bar-c";
    if (label.startsWith("D")) return "bar-d";
    return "bar-f";
  };

  useEffect(() => {
    const maxLength = Math.max(...grades.map((g) => g.score.length));
    setScoreIndex(Array.from({ length: maxLength }, (_, i) => i));
    //                                               ↓   ↓    ↓
    //                                          element index 返回值
  }, [grades]);
    // _（下划线）：数组中的元素值（这里我们不需要用它，所以用 _ 表示忽略）
    // i：当前的索引位置（0, 1, 2, ...）
    // => i：返回index。最后更新setScoreIndex（更新状态）
    // ！！！这段code意思是把index变成一个数组 [0, 1, 2, ..., maxLength-1]

  return (
    <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
      <Grid size={2}>
        <Sidebar />
      </Grid>

      <Grid size={10}>
        <div className="grade-histogram-container">
          <div className="grade-wrapper">
            {/* Header */}
            <div className="grade-header">
              <h1 className="grade-title">
                <BarChart3 className="title-icon" />
                Statistical analysis of scores
              </h1>
              <p className="grade-subtitle">
                Visually display the distribution of academic performance
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="stats-row">
              <div className="stat-box english-average">
                <div className="stat-icon-wrapper">
                  <TrendingUp className="stat-icon" />
                </div>
                <div className="stat-info">
                  <div className="stat-label">English Average</div>
                  <div className="stat-value">{statistics.EnglishAv}</div>
                </div>
              </div>

              <div className="stat-box math-average">
                <div className="stat-icon-wrapper">
                  <TrendingUp className="stat-icon" />
                </div>
                <div className="stat-info">
                  <div className="stat-label">Math Average</div>
                  <div className="stat-value">{statistics.MathAv}</div>
                </div>
              </div>

              <div className="stat-box physics-average">
                <div className="stat-icon-wrapper">
                  <TrendingUp className="stat-icon" />
                </div>
                <div className="stat-info">
                  <div className="stat-label">Physics Average</div>
                  <div className="stat-value">{statistics.PhysicsAv}</div>
                </div>
              </div>

              <div className="stat-box programming-average">
                <div className="stat-icon-wrapper">
                  <TrendingUp className="stat-icon" />
                </div>
                <div className="stat-info">
                  <div className="stat-label">Programming Average</div>
                  <div className="stat-value">{statistics.ProgrammingAv}</div>
                </div>
              </div>

              <div className="stat-box chemical-average">
                <div className="stat-icon-wrapper">
                  <TrendingUp className="stat-icon" />
                </div>
                <div className="stat-info">
                  <div className="stat-label">Chemical Average</div>
                  <div className="stat-value">{statistics.ChemicalAv}</div>
                </div>
              </div>

            </div>

            <div className="content-grid">
              {/* Histogram */}
              <div className="histogram-card">
                <div className="card-header">
                  <h2 className="card-title">Distribution histogram</h2>
                </div>
                <div className="histogram-container">
                  <div className="histogram-chart">
                    {Object.entries(gradeDistribution).map(([label, count]) => (
                      <div key={label} className="histogram-bar-wrapper">
                        <div className="bar-container">
                          <div
                            className={`histogram-bar ${getBarColor(label)}`}
                            style={{
                              height:
                                maxCount > 0
                                  ? `${(count / maxCount) * 100}%`
                                  : "0%",
                            }}
                          >
                            {count > 0 && (
                              <span className="bar-count">{count}</span>
                            )}
                          </div>
                        </div>
                        <div className="bar-label">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grade List */}
              <div className="grade-list-card">
                <div className="card-header">
                  <h2 className="card-title">Scores Table</h2>
                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="add-grade-btn"
                  >
                    <Plus className="btn-icon" />
                    ADD SCORE
                  </button>
                </div>

                {showAddForm && (
                  <div className="add-form">
                    <select
                      className="form-input"
                      value={newGrade.id}
                      onChange={(e) =>
                        setNewGrade({ ...newGrade, id: e.target.value })
                      }
                    >
                      <option value={""}>Select Course</option>
                      <option value={"English"}>English</option>
                      <option value={"Math"}>Math</option>
                      <option value={"Physics"}>Physics</option>
                      <option value={"Programming"}>Programming</option>
                      <option value={"Chemical"}>Chemical</option>
                    </select>
                    
                    <input
                      type="number"
                      placeholder="score (0-100)"
                      value={newGrade.score}
                      onChange={(e) =>
                        setNewGrade({ ...newGrade, score: e.target.value })
                      }
                      min="0"
                      max="100"
                      className="form-input"
                    />
                    <div className="form-actions">
                      <button
                        onClick={addGrade}
                        className="form-btn form-btn-primary"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => {
                          setShowAddForm(false);
                          setNewGrade({ subject: "", score: "" });
                        }}
                        className="form-btn form-btn-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* <div className="grade-list">
              {grades.length === 0 ? (
                <div className="empty-state">暂无成绩数据</div>
              ) : (
                grades.map(grade => (
                  <div key={grade.id} className="grade-item">
                    <div className="grade-subject">{grade.subject}</div>
                    <div className="grade-score-wrapper">
                      <span className={`grade-score ${getGradeColor(grade.score)}`}>
                        {grade.score}
                      </span>
                      <button
                        onClick={() => deleteGrade(grade.id)}
                        className="delete-btn"
                      >
                        <Trash2 className="delete-icon" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div> */}
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        {grades.map((grade) => (
                          <TableCell key={grade.id} align="right">
                            {grade.id}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>

                    <TableBody>
                        
                      {scoreIndex.map((index) => (
                        <TableRow>
                          <TableCell component="th" scope="row">
                            Test {index + 1}
                          </TableCell>
                          {grades.map((grade) => (
                            <TableCell key={grade.id} align="right">
                              {grade.score[index] || "-"}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
