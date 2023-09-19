// import React from "react";
// import {
//   View,
//   Image,
//   StyleSheet,
//   TouchableWithoutFeedback,
// } from "react-native";

// export default function CluePanel() {
//   return (
//     <View style={cluePanelStyle.panel}>
//       <TouchableWithoutFeedback>
//         <Image
//           style={cluePanelStyle.img}
//           source={require("../img/changeQuestion.png")}
//         />
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback>
//         <Image style={cluePanelStyle.img} source={require("../img/clue.png")} />
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback>
//         <Image
//           style={cluePanelStyle.img}
//           source={require("../img/helpAI.png")}
//         />
//       </TouchableWithoutFeedback>
//     </View>
//   );
// }
// const cluePanelStyle = StyleSheet.create({
//   panel: {
//     flex: 0,
//     flexDirection: "row",
//     justifyContent: `space-evenly`,
//     alignItems: `center`,
//     width: `100%`,
//     height: 80,

//     borderTopWidth: 2,
//     borderBottomWidth: 2,
//     borderColor: "rgba(255, 255, 0, 0.5)",
//     boxShadowColor: "black",
//     boxShadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     boxShadowOpacity: 1,
//     elevation: 50,
//   },
//   img: {
//     width: 50,
//     height: 50,
//   },
// });

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   View,
//   Image,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Modal,
//   Text,
//   Button,
// } from "react-native";

// export default function CluePanel() {
//   const [isChangeQuestionPressed, setChangeQuestionPressed] = useState(false);
//   const [isCluePressed, setCluePressed] = useState(false);
//   const [isHelpAIPressed, setHelpAIPressed] = useState(false);

//   const [modalVisible, setModalVisible] = useState(false); // Состояние для управления видимостью модального окна
//   const isAi = useSelector((state) => state.ai.isAi);

//   const handleChangeQuestionPress = () => {
//     setChangeQuestionPressed(true);
//   };

//   const handleCluePress = () => {
//     setCluePressed(true);
//   };

//   const handleHelpAIPress = () => {
//     setHelpAIPressed(true);
//     setModalVisible(true); // При нажатии на кнопку, открываем модальное окно
//   };

//   return (
//     <View style={cluePanelStyle.panel}>
//       <TouchableWithoutFeedback onPress={handleChangeQuestionPress} disabled={isChangeQuestionPressed}>
//         <Image
//           style={[cluePanelStyle.img, isChangeQuestionPressed && { tintColor: "red" }]}
//           source={require("../img/changeQuestion.png")}
//         />
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback onPress={handleCluePress} disabled={isCluePressed}>
//         <Image
//           style={[cluePanelStyle.img, isCluePressed && { tintColor: "red" }]}
//           source={require("../img/clue.png")}
//         />
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback onPress={handleHelpAIPress} disabled={isHelpAIPressed}>
//         <Image
//           style={[cluePanelStyle.img, isHelpAIPressed && { tintColor: "red" }]}
//           source={require("../img/helpAI.png")}
//         />
//       </TouchableWithoutFeedback>

//       {/* Модальное окно */}
//       <Modal
//         visible={modalVisible}
//         animationType="slide"
//         transparent={true}
//       >
//         <View style={cluePanelStyle.modalContainer}>
//           <View style={cluePanelStyle.modalContent}>
//             <Text style={cluePanelStyle.modalText}>Наш искусственный интелект настролько умён, что он на 100% может верно ответить на любой ваш вопрос!</Text>
//             <Text style={cluePanelStyle.modalText}> {isAi}</Text>
//             <Button
//               title="Закрыть"
//               onPress={() => {
//                 setModalVisible(false);
//               }}
//             />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const cluePanelStyle = StyleSheet.create({
//   panel: {
//     flex: 0,
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     width: "100%",
//     height: 80,
//     borderTopWidth: 2,
//     borderBottomWidth: 2,
//     borderColor: "rgba(255, 255, 0, 0.5)",
//     elevation: 50,
//   },
//   img: {
//     width: 50,
//     height: 50,
//   },

//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "lightblue",
//     padding: 20,

//     borderRadius: 10,
//   },

//   modalText: {
//     marginBottom: 20
//   },
// });

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setIsClue,
//   setTextUnderlineA,
//   setTextUnderlineB,
//   setTextUnderlineC,
//   setTextUnderlineD,
// } from "../redux/clueHelperSlice";
// import {
//   View,
//   Image,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Modal,
//   Text,
//   Button,
// } from "react-native";

// export default function CluePanel() {
//   const [isChangeQuestionPressed, setChangeQuestionPressed] = useState(false);
//   const [isCluePressed, setCluePressed] = useState(false);
//   const [isHelpAIPressed, setHelpAIPressed] = useState(false);
//   const [questionImage, setQuestionImage] = useState(
//     require("../img/changeQuestion.png")
//   );
//   const [clueImage, setClueImage] = useState(require("../img/clue.png"));
//   const [helpAIImage, setHelpAIImage] = useState(require("../img/helpAI.png"));

//   const [modalVisible, setModalVisible] = useState(false); // Состояние для управления видимостью модального окна
//   const isAi = useSelector((state) => state.ai.isAi);
//   const isClue = useSelector((state) => state.clue.isClue);

//   const dispatch = useDispatch();
//   const question = {
//     trueAnswer: "B",
//   };
//   useEffect(() => {
//     if (isClue) {
//       switch (question.trueAnswer) {
//         case "A":
//           setTextUnderlineB(false);
//           setTextUnderlineD(false);
//           break;
//         case "B":
//           setTextUnderlineA(false);
//           setTextUnderlineC(false);
//           break;
//         case "C":
//           setTextUnderlineA(false);
//           setTextUnderlineD(false);
//           break;
//         case "D":
//           setTextUnderlineB(false);
//           setTextUnderlineC(false);
//           break;
//       }
//     } else {
//       setTextUnderlineA(true);
//       setTextUnderlineB(true);
//       setTextUnderlineC(true);
//       setTextUnderlineD(true);
//     }
//   }, []);

//   const handleChangeQuestionPress = () => {
//     setQuestionImage(require("../img/questionChangeEraser.png")); // Установите новое изображение при нажатии
//     setChangeQuestionPressed(true);
//   };

//   const handleCluePress = () => {
//     setClueImage(require("../img/clueEraser.png")); // Установите новое изображение при нажатии
//     setCluePressed(true);
//     dispatch(setIsClue(true));
//   };

//   const handleHelpAIPress = () => {
//     setHelpAIImage(require("../img/helAiEraser.png")); // Установите новое изображение при нажатии
//     setHelpAIPressed(true);
//     setModalVisible(true); // При нажатии на кнопку, открываем модальное окно
//   };

//   // useEffect(() => {
//   //   if (isClue) {
//   //     switch (question.trueAnswer) {
//   //       case "A":
//   //         setTextUnderlineB(false);
//   //         setTextUnderlineD(false);
//   //         break;
//   //       case "B":
//   //         setTextUnderlineA(false);
//   //         setTextUnderlineC(false);
//   //         break;
//   //       case "C":
//   //         setTextUnderlineA(false);
//   //         setTextUnderlineD(false);
//   //         break;
//   //       case "D":
//   //         setTextUnderlineB(false);
//   //         setTextUnderlineC(false);
//   //         break;
//   //     }
//   //   } else {
//   //     setTextUnderlineA(true);
//   //     setTextUnderlineB(true);
//   //     setTextUnderlineC(true);
//   //     setTextUnderlineD(true);
//   //   }
//   // }, []);

//   return (
//     <View style={cluePanelStyle.panel}>
//       <TouchableWithoutFeedback
//         onPress={handleChangeQuestionPress}
//         disabled={isChangeQuestionPressed}
//       >
//         <Image style={cluePanelStyle.img} source={questionImage} />
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback
//         onPress={handleCluePress}
//         disabled={isCluePressed}
//       >
//         <Image style={cluePanelStyle.img} source={clueImage} />
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback
//         onPress={handleHelpAIPress}
//         disabled={isHelpAIPressed}
//       >
//         <Image style={cluePanelStyle.img} source={helpAIImage} />
//       </TouchableWithoutFeedback>

//       {/* Модальное окно */}
//       <Modal visible={modalVisible} animationType="slide" transparent={true}>
//         <View style={cluePanelStyle.modalContainer}>
//           <View style={cluePanelStyle.modalContent}>
//             <Text style={cluePanelStyle.modalText}>
//               Наш искусственный интелект настролько умён, что он на 100% может
//               верно ответить на любой ваш вопрос!
//             </Text>
//             <Text style={cluePanelStyle.modalText}> {isAi}</Text>
//             <Button
//               title="Закрыть"
//               onPress={() => {
//                 setModalVisible(false);
//               }}
//             />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const cluePanelStyle = StyleSheet.create({
//   panel: {
//     flex: 0,
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     width: "100%",
//     height: 80,
//     borderTopWidth: 2,
//     borderBottomWidth: 2,
//     borderColor: "rgba(255, 255, 0, 0.5)",
//     elevation: 50,
//   },
//   img: {
//     width: 50,
//     height: 50,
//   },

//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "lightblue",
//     padding: 20,

//     borderRadius: 10,
//   },

//   modalText: {
//     marginBottom: 20,
//   },
// });


import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsClue,
  setTextUnderlineA,
  setTextUnderlineB,
  setTextUnderlineC,
  setTextUnderlineD,
} from "../redux/clueHelperSlice";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Text,
  Button,
} from "react-native";
import { setNextQue } from "../redux/nextQuestionHelpSlice";

export default function CluePanel() {

  const [isChangeQuestionPressed, setChangeQuestionPressed] = useState(false);
  const [isCluePressed, setCluePressed] = useState(false);
  const [isHelpAIPressed, setHelpAIPressed] = useState(false);
  const [questionImage, setQuestionImage] = useState(
    require("../img/changeQuestion.png")
  );
  const [clueImage, setClueImage] = useState(require("../img/clue.png"));
  const [helpAIImage, setHelpAIImage] = useState(require("../img/helpAI.png"));
  const nextQuestionHelp = useSelector((state) => state.nextQ.nextQue);

  const [modalVisible, setModalVisible] = useState(false); // Состояние для управления видимостью модального окна
  const isAi = useSelector((state) => state.ai.isAi);
  const isClue = useSelector((state) => state.clue.isClue);

  const dispatch = useDispatch();
  const question = {
    trueAnswer: "B",
  };
  useEffect(() => {
    if (isClue) {
      switch (question.trueAnswer) {
        case "A":
          setTextUnderlineB(false);
          setTextUnderlineD(false);
          break;
        case "B":
          setTextUnderlineA(false);
          setTextUnderlineC(false);
          break;
        case "C":
          setTextUnderlineA(false);
          setTextUnderlineD(false);
          break;
        case "D":
          setTextUnderlineB(false);
          setTextUnderlineC(false);
          break;
      }
    } else {
      setTextUnderlineA(true);
      setTextUnderlineB(true);
      setTextUnderlineC(true);
      setTextUnderlineD(true);
    }
  }, []);

  const handleChangeQuestionPress = () => {
    setQuestionImage(require("../img/questionChangeEraser.png")); // Установите новое изображение при нажатии
    setChangeQuestionPressed(true);
    dispatch(setNextQue(true));
    // console.log(nextQuestionHelp);


  };


  const handleCluePress = () => {
    setClueImage(require("../img/clueEraser.png")); // Установите новое изображение при нажатии
    setCluePressed(true);
    dispatch(setIsClue(true));
  };

  const handleHelpAIPress = () => {
    setHelpAIImage(require("../img/helAiEraser.png")); // Установите новое изображение при нажатии
    setHelpAIPressed(true);
    setModalVisible(true); // При нажатии на кнопку, открываем модальное окно
  };



  return (
    <View style={cluePanelStyle.panel}>
      <TouchableWithoutFeedback
        onPress={handleChangeQuestionPress}
        disabled={isChangeQuestionPressed}
      >
        <Image style={cluePanelStyle.img} source={questionImage} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={handleCluePress}
        disabled={isCluePressed}
      >
        <Image style={cluePanelStyle.img} source={clueImage} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={handleHelpAIPress}
        disabled={isHelpAIPressed}
      >
        <Image style={cluePanelStyle.img} source={helpAIImage} />
      </TouchableWithoutFeedback>

      {/* Модальное окно */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={cluePanelStyle.modalContainer}>
          <View style={cluePanelStyle.modalContent}>
            <Text style={cluePanelStyle.modalText}>
              Наш искусственный интелект настролько умён, что он на 100% может
              верно ответить на любой ваш вопрос!
            </Text>
            <Text style={cluePanelStyle.modalText}> {isAi}</Text>
            <Button
              title="Закрыть"
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const cluePanelStyle = StyleSheet.create({
  panel: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: 80,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "rgba(255, 255, 0, 0.5)",
    elevation: 50,
  },
  img: {
    width: 50,
    height: 50,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "lightblue",
    padding: 20,

    borderRadius: 10,
  },

  modalText: {
    marginBottom: 20,
  },
});
