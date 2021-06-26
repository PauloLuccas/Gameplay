import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 20,
        color: theme.colors.heading,
        marginRight: 5
    },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading
    },
    message: {
        fontSize: 12,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }
})