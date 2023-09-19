import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";

import {
  ImageBackground,
  SafeAreaView,
  View,
  Modal,
  Text,
  Linking,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";

const MainScreen = () => {
  const [hiddenBtn, setHiddenBtn] = useState(-400);

  // Для первого модального окна
  const [modalQuestionVisible, setModalQuestionVisible] = useState(false);

  // Для второго модального окна
  const [modalSettingsVisible, setModalSettingsVisible] = useState(false);

  const menuOnPress = () => {
    if (hiddenBtn === 0) {
      setHiddenBtn(-100);
    } else {
      setHiddenBtn(0);
    }
  };

  //открытие и закрытие модальных окон
  const openModalQuestion = () => {
    setModalQuestionVisible(true);
  };

  const closeModalQuestion = () => {
    setModalQuestionVisible(false);
  };

  const openModalSettings = () => {
    setModalSettingsVisible(true);
  };

  const closeModalSettings = () => {
    setModalSettingsVisible(false);
  };
  ////////////////

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        mtLight: require("..//fonts/Montserrat-Light.ttf"),
        mtMedium: require("..//fonts/Montserrat-Medium.ttf"),
        mtBold: require("..//fonts/Montserrat-Bold.ttf"),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  const navigation = useNavigation();

  const openNewPage = () => {
    navigation.navigate("QuestionScreen"); // 'NewPage' - это имя, которое вы дали новой странице
  };

  if (!fontLoaded) {
    // Пока шрифт не загружен, показываем кружок загрузки
    return (
      <ImageBackground
        source={require("../img/mainBg.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.loadingContainer}>
          <View>
            <Text style={{ color: "white" }}>Ver: 0.1 beta</Text>
          </View>
          <View style={styles.loadingLogo}>
            <Image
              source={require("../img/mainLogoAnimate.webp")}
              style={styles.logoImage}
              resizeMode="cover"
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
  return (
    <ImageBackground
      source={require("../img/mainBg.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.box1}>
          <View style={styles.topBtnBox}>
            <TouchableWithoutFeedback onPress={menuOnPress}>
              <Image
                source={require("../img/menuBtn.png")}
                style={styles.menuImage}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={openModalQuestion}>
              <Image
                source={require("../img/questionBtn.png")}
                style={[styles.questionImage, { right: hiddenBtn }]}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalQuestionVisible}
              onRequestClose={closeModalQuestion}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text
                    style={{
                      fontFamily: "mtMedium",
                      fontSize: 22,
                    }}
                  >
                    Игра для мозговых штурмов! Mindblower - взрывная
                    интеллектуальная развлекалка!
                  </Text>
                  <TouchableWithoutFeedback onPress={closeModalQuestion}>
                    <Text style={styles.closeButton}>Закрыть</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </Modal>

            <TouchableWithoutFeedback onPress={openModalSettings}>
              <Image
                source={require("../img/settingsBtn.png")}
                style={[styles.questionImage, { right: hiddenBtn }]}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalSettingsVisible}
              onRequestClose={closeModalSettings}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>Created with honor by</Text>
                  <Text
                    style={styles.linkText}
                    onPress={() =>
                      Linking.openURL("https://github.com/kemikable")
                    }
                  >
                    @kemikable
                  </Text>
                  <Text
                    style={styles.linkText}
                    onPress={() =>
                      Linking.openURL("https://github.com/adilek96")
                    }
                  >
                    @adilek96
                  </Text>
                  <TouchableWithoutFeedback onPress={closeModalSettings}>
                    <Text style={styles.closeButton}>Закрыть</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </Modal>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../img/mainLogo.png")}
              style={styles.logoImage}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.box3}>
          <TouchableWithoutFeedback onPress={openNewPage}>
            <View style={styles.startButton}>
              <Image
                source={require("../img/playBtnRus.png")}
                style={styles.startBtnIimage}
                resizeMode="contain"
              />
              <View style={styles.overlay}></View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MainScreen;
