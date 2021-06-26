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
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },
    title: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15
    },
    check: {
        width: 8,
        height: 8,
        backgroundColor: theme.colors.secondary100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderBottomColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 3
    },
    checked: {
        width: 8,
        height: 8,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-end',
        marginRight: 8,
        borderRadius: 3
    }
})