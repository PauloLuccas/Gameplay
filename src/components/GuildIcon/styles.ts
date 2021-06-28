import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    image: {
        width: 64,
        height: 64,
        borderRadius: 8,
        marginRight: 10,
        borderColor: theme.colors.secondary40,
        borderWidth: 3
    },
});