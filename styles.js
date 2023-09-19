import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box1: {
    flex: 0,
    flexDirection: `column`,
    justifyContent: `flex-end`,
    alignItems: "flex-end",
    width: `100%`,
    height: `20%`,
  },
  box2: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: "center",
    width: `100%`,
    height: `50%`,
  },
  box3: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: "center",
    width: `100%`,
    height: `30%`,
  },
  loadingContainer: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: "center",
  },
  loadingLogo: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: `90%`,
    height: `20%`,
  },
  logoContainer: {
    alignItems: "center",
    width: `90%`,
    height: `30%`,
  },
  logoImage: {
    width: `100%`,
    height: `100%`,
  },
  startButton: {
    flex: 0,
    justifyContent: `center`,
    alignItems: `center`,
    width: `50%`,
    height: `20%`,
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
  startBtnIimage: {
    width: `70%`,
    height: `60%`,
  },
  backgroundImage: {
    flex: 1,
  },
  topBtnBox: {
    flex: 0,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    width: 50,
    height: `95%`,
    marginRight: 15,
  },
  menuImage: {
    width: 50,
    height: 50,
    opacity: 0.8,
  },
  questionImage: {
    opacity: 0.8,
    width: 50,
    height: 50,
  },
  settingsImage: {
    opacity: 0.8,
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
    width: "90%",
  },
  closeButton: {
    textAlign: "right",
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Занимает всю доступную площадь
    backgroundColor: "rgba(144, 238, 144, 0.3)", // Прозрачный  цвет
    borderRadius: 100, // Опционально, если нужно округлить задний фон
    zIndex: -1, // Отправляет элемент на задний план
    borderWidth: 1,
    borderColor: "transparent", // Чтобы избежать граничных конфликтов
  },
  text: {
    textDecorationLine: "underline",
    color: "white",
    fontSize: 16,
    textAlign: "left",
  },
  linkText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 30,
    textDecorationLine: "underline",
  },
  //------------------------------
  widgetsBox: {
    flex: 0,
    flexDirection: `column`,
    justifyContent: `space-evenly`,
    alignItems: "flex-start",
    width: `100%`,
    height: `30%`,
  },

  buttonBox: {
    flex: 0,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: "center",
    width: `100%`,
    height: `20%`,
  },
});
