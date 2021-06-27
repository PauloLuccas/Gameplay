import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 92,
        height: 100,
        justifyContent: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 96,
        height: 110,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 17
    },
    title: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15,
        marginTop: 12
    },
    check: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 8,
        height: 8,
        backgroundColor: theme.colors.secondary100,
        borderBottomColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 3
    },
    checked: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 8,
        height: 8,
        backgroundColor: theme.colors.primary,
        borderRadius: 3
    }
})