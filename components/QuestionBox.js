import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setNextQuestion } from "../redux/nextQuestionSlice";
import { setQuestionCount } from "../redux/questionCountSlice";
import { setWrongAnswer, setWrongAnswerDiscription } from "../redux/wrongSlice";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import WrongAnswerModal from "./WrongAnswerModal";
import GameEnddingModal from "./GameEnddingModal";
import { AppState, AppStateStatus } from "react-native";
import { setIsAi } from "../redux/aiHelperSlice";
import { setWinningsZero } from "../redux/winningSlice";
import { setCorrect, setCorrectZero } from "../redux/correctSlice";
import { setNextQue } from "../redux/nextQuestionHelpSlice";
import {
  setIsClue,
  setTextUnderlineA,
  setTextUnderlineB,
  setTextUnderlineC,
  setTextUnderlineD,
} from "../redux/clueHelperSlice";

export default function QuestionBox() {
  const [question, setQuestion] = useState(""); // сюда записывается вопрос
  const [userAnswer, setUserAnswer] = useState(false); // индикатор верного ответа
  const [isTouchableEnabled, setIsTouchableEnabled] = useState(true); // нужен для отключения TouchableWithoutFeedback
  const [aAnswerIsCheck, setAAnswerIsCheck] = useState(false);
  const [bAnswerIsCheck, setBAnswerIsCheck] = useState(false);
  const [cAnswerIsCheck, setCAnswerIsCheck] = useState(false);
  const [dAnswerIsCheck, setDAnswerIsCheck] = useState(false);
  const [easyQuestionsCount, setEasyQuestionsCount] = useState();
  const [mediumQuestionsCount, setMediumQuestionsCount] = useState();
  const [hardQuestionsCount, setHardQuestionsCount] = useState();
  // const [correct, setCorrect] = useState(1);
  // глобальный стейт
  const nextQuestion = useSelector((state) => state.next.nextQuestion);
  const questionCount = useSelector((state) => state.count.questionCount);
  const isClue = useSelector((state) => state.clue.isClue);
  const textUnderlineA = useSelector((state) => state.clue.textUnderlineA);
  const textUnderlineB = useSelector((state) => state.clue.textUnderlineB);
  const textUnderlineC = useSelector((state) => state.clue.textUnderlineC);
  const textUnderlineD = useSelector((state) => state.clue.textUnderlineD);
  const nextQuestionHelp = useSelector((state) => state.nextQ.nextQue);
  const correct = useSelector((state) => state.correctCount.correct);

  const dispatch = useDispatch();
  //---------------------- отлавливает закрытия приложения
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "inactive" || nextAppState === "background") {
        // Здесь можно выполнить действия перед закрытием приложения
        dispatch(setCorrectZero());
        dispatch(setWinningsZero());
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);

  ///-------------------------------- функции получения id вопросов из async storage --------
  const getEasyData = async () => {
    try {
      const value = await AsyncStorage.getItem("easyId");
      if (value !== null) {
        const count = JSON.parse(value);

        setEasyQuestionsCount(count);
      } else setEasyQuestionsCount(1);
    } catch (error) {
      console.error(error);
    }
  };
  //---------------------------------
  const getMediumData = async () => {
    try {
      const value = await AsyncStorage.getItem("mediumId");
      if (value !== null) {
        const count = JSON.parse(value);

        setMediumQuestionsCount(count);
      } else setMediumQuestionsCount(1);
    } catch (error) {
      console.error(error);
    }
  };
  //---------------------------------
  const getHardData = async () => {
    try {
      const value = await AsyncStorage.getItem("hardId");
      if (value !== null) {
        const count = JSON.parse(value);

        setHardQuestionsCount(count);
      } else setHardQuestionsCount(1);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (correct <= 5) {
      getEasyData();
    } else if (correct > 5 && correct <= 10) {
      getMediumData();
    } else if (correct > 10 && correct <= 15) {
      getHardData();
    }
    dispatch(setTextUnderlineA(true));
    dispatch(setTextUnderlineB(true));
    dispatch(setTextUnderlineC(true));
    dispatch(setTextUnderlineD(true));
  }, [nextQuestion]);
  ///---------------------- получение вопросов по уровню сложности -----------------
  //-------------------------------- легкие ----------------------------------------
  const getEasyQuestions = () => {
    axios
      .get(
        `https://md-server-nine.vercel.app/questions/easy/${easyQuestionsCount}`
      )
      .then(function (response) {
        setQuestion(response.data);
        setIsTouchableEnabled(true);
        setDAnswerIsCheck(false);
        setCAnswerIsCheck(false);
        setBAnswerIsCheck(false);
        setAAnswerIsCheck(false);
        setUserAnswer(false);
        dispatch(
          setIsAi(
            `А ответом на данный вопрос является: ${response.data.trueAnswer}`
          )
        );
      })
      .catch(function (error) { });
  };
  //-------------------------------- средние ----------------------------------------
  const getMediumQuestions = () => {
    axios
      .get(
        `https://md-server-nine.vercel.app/questions/medium/${mediumQuestionsCount}`
      )
      .then(function (response) {
        setQuestion(response.data);
        setIsTouchableEnabled(true);
        setDAnswerIsCheck(false);
        setCAnswerIsCheck(false);
        setBAnswerIsCheck(false);
        setAAnswerIsCheck(false);
        setUserAnswer(false);
        dispatch(
          setIsAi(
            `А ответом на данный вопрос является: ${response.data.trueAnswer}`
          )
        );
      })
      .catch(function (error) { });
  };
  //-------------------------------- сложные ----------------------------------------
  const getHardQuestions = () => {
    axios
      .get(
        `https://md-server-nine.vercel.app/questions/hard/${hardQuestionsCount}`
      )
      .then(function (response) {
        setQuestion(response.data);
        setIsTouchableEnabled(true);
        setDAnswerIsCheck(false);
        setCAnswerIsCheck(false);
        setBAnswerIsCheck(false);
        setAAnswerIsCheck(false);
        setUserAnswer(false);
        dispatch(
          setIsAi(
            `А ответом на данный вопрос является: ${response.data.trueAnswer}`
          )
        );
      })
      .catch(function (error) { });
  };
  // -------------------------------------
  useEffect(() => {
    if (correct <= 5) {
      getEasyQuestions();
    } else if (correct > 5 && correct <= 10) {
      getMediumQuestions();
    } else if (correct > 10 && correct <= 15) {
      getHardQuestions();
    }

    // getEasyQuestions();
  }, [easyQuestionsCount, mediumQuestionsCount, hardQuestionsCount]);

  //------------------------------- функции сохранения в локал сторедж ------------
  const saveEasyInStorage = async () => {
    try {
      await AsyncStorage.setItem("easyId", JSON.stringify(question.id + 1));
      console.log("Data saved successfully");
    } catch (error) {
      console.error(error);
    }
  };
  const saveMediumInStorage = async () => {
    try {
      await AsyncStorage.setItem("mediumId", JSON.stringify(question.id + 1));
      console.log("Data saved successfully");
    } catch (error) {
      console.error(error);
    }
  };
  const saveHardInStorage = async () => {
    try {
      await AsyncStorage.setItem("hardId", JSON.stringify(question.id + 1));
      console.log("Data saved successfully");
    } catch (error) {
      console.error(error);
    }
  };
  const checkTrueAnswer = (selectedAnswer) => {
    setIsTouchableEnabled(false);
    switch (selectedAnswer) {
      case "A":
        setAAnswerIsCheck(true);
        break;
      case "B":
        setBAnswerIsCheck(true);
        break;
      case "C":
        setCAnswerIsCheck(true);
        break;
      case "D":
        setDAnswerIsCheck(true);
        break;
    }
    if (selectedAnswer === question.trueAnswer) {
      setUserAnswer(true);
      dispatch(setCorrect());

      dispatch(setNextQuestion(question.id));
      dispatch(setQuestionCount(questionCount + 1));

      if (correct <= 5) {
        saveEasyInStorage();
      }
      if (correct > 5 && correct <= 10) {
        saveMediumInStorage();
      }
      if (correct > 10 && correct <= 15) {
        saveHardInStorage();
      }
    } else {
      dispatch(setIsClue(false));
      dispatch(setTextUnderlineA(true));
      dispatch(setTextUnderlineB(true));
      dispatch(setTextUnderlineC(true));
      dispatch(setTextUnderlineD(true));
      setUserAnswer(false);
      dispatch(setWrongAnswer(true));
      dispatch(setCorrectZero());
      dispatch(setWinningsZero());
      dispatch(setNextQue(false)); //логика смены вопроса(кнопка смена вопроса)
      dispatch(setWrongAnswerDiscription(question.description));
      if (correct <= 5) {
        saveEasyInStorage();
      }
      if (correct > 5 && correct <= 10) {
        saveMediumInStorage();
      }
      if (correct > 10 && correct <= 15) {
        saveHardInStorage();
      }
    }
  };

  ///--------------------------------------------------------------------
  //--------------------------------------------------------------------
  //-------------------------------------------------------------------

  useEffect(() => {
    if (correct <= 5) {
      setEasyQuestionsCount((prev) => prev + 1);
    }
    if (correct > 5 && correct <= 10) {
      setMediumQuestionsCount((prev) => prev + 1);
    }
    if (correct > 10 && correct <= 15) {
      setHardQuestionsCount((prev) => prev + 1);
    }
  }, [nextQuestionHelp]);

  const notSelect = { color: "yellow" };
  const isSelect = { textDecorationLine: "underline", color: "black" };

  useEffect(() => {
    if (isClue) {
      switch (question.trueAnswer) {
        case "A":
          dispatch(setTextUnderlineB(false));
          dispatch(setTextUnderlineD(false));
          break;
        case "B":
          dispatch(setTextUnderlineA(false));
          dispatch(setTextUnderlineC(false));
          break;
        case "C":
          dispatch(setTextUnderlineA(false));
          dispatch(setTextUnderlineD(false));
          break;
        case "D":
          dispatch(setTextUnderlineB(false));
          dispatch(setTextUnderlineC(false));
          break;
        default:
          console.log("somthing wrong");
          dispatch(setTextUnderlineA(true));
          dispatch(setTextUnderlineB(true));
          dispatch(setTextUnderlineC(true));
          dispatch(setTextUnderlineD(true));
      }
    }
  }, [isClue]);

  const answerStyle = {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `60%`,
    height: 50,

    borderWidth: 1,
    borderColor: userAnswer ? "green" : "red",
    borderRadius: 100,
    boxShadowColor: "black",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    boxShadowOpacity: 0.5,
    boxShadowRadius: 4,
    elevation: 6,
  };
  if (!question) {
    return <Text style={{ color: "yellow" }}>Loading...</Text>; // Пока данные загружаются, отображаем "Loading..."
  }
  return (
    <View style={questionBoxStyles.questionBox}>
      <View style={questionBoxStyles.title}>
        <Text style={{ color: "pink" }}>{question.title}</Text>
      </View>

      <TouchableWithoutFeedback
        onPress={() => checkTrueAnswer("A")}
        disabled={!isTouchableEnabled}
      >
        <View style={!aAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
          <Text style={textUnderlineA ? notSelect : isSelect}>
            {question.answers.A}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => checkTrueAnswer("B")}
        disabled={!isTouchableEnabled}
      >
        <View style={!bAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
          <Text style={textUnderlineB ? notSelect : isSelect}>
            {question.answers.B}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => checkTrueAnswer("C")}
        disabled={!isTouchableEnabled}
      >
        <View style={!cAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
          <Text style={textUnderlineC ? notSelect : isSelect}>
            {question.answers.C}
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => checkTrueAnswer("D")}
        disabled={!isTouchableEnabled}
      >
        <View style={!dAnswerIsCheck ? questionBoxStyles.answers : answerStyle}>
          <Text style={textUnderlineD ? notSelect : isSelect}>
            {question.answers.D}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <WrongAnswerModal />
      <GameEnddingModal />
    </View>
  );
}
const questionBoxStyles = StyleSheet.create({
  title: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `95%`,
    height: 110,
    padding: 20,

    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 100,
    boxShadowColor: "black",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    boxShadowOpacity: 0.5,
    boxShadowRadius: 4,
    elevation: 6,
  },
  answers: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `60%`,
    height: 50,
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 100,
    boxShadowColor: "black",
    boxShadowOffset: {
      width: 0,
      height: 2,
    },
    boxShadowOpacity: 0.5,
    boxShadowRadius: 4,
    elevation: 6,
  },
  questionBox: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `space-around`,
    alignItems: "center",
    width: `100%`,
    height: `50%`,
  },
});
