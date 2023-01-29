import { Alert, Linking } from "react-native";

async function openExternalLink(url: string) {
  // Checking if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Não foi possivel encontrar esta URL: ${url}`);
  }
}

export default openExternalLink;
