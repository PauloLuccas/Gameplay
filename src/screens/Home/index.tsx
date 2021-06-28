import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { ListHeader } from '../../components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import { ListDivider } from '../../components/ListDivider';
import { Appointments } from '../../components/Appointments';
import { Background } from '../../../src/components/Background';
import { CategorySelect } from '../../components/CategorySelect';

export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder um partida da md10.'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder um partida da md10.'
        },
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentsDetails() {
        navigation.navigate('AppointmentsDetails')
    }

    function handleAppointmentsCreate() {
        navigation.navigate('AppointmentsCreate')
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentsCreate}/>
            </View>
            <View>
                <CategorySelect 
                    CategorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <View style={styles.content}>
                    <ListHeader 
                        title='Partidas agendadas'
                        subtitle='Total 6' 
                    />
                </View>
            </View>

            <FlatList 
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointments
                        data={item}
                        onPress={handleAppointmentsDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                contentContainerStyle={{ paddingBottom: 69 }}
                showsVerticalScrollIndicator={false}
            />
        </Background>
    )
}