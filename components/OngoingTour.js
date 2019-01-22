import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import style from '../assets/Style.js';
import { Participants } from './Participants.js';

export class OngoingTour extends React.Component {

    render() {
        return (
            <View style={style.container}>
                <Text style={style.headerText}>Seger villkor:</Text>
                <Text style={style.paragraphText}>Flest kills under 8 matcher</Text>
                <ScrollView style={{ height: '100%' }}>
                    <Participants
                        owner={true}
                        username={'Miranda'}
                        matches={2}
                    />
                    <Participants
                        username={'Victor'}
                        matches={7}
                    />
                    <Participants
                        username={'Robert'}
                        matches={5}
                    />
                    <Participants
                        username={'Pinar'}
                        matches={3}
                    />
                    <Participants
                        username={'Fredrik'}
                        matches={8}
                    />
                    <Participants
                        username={'Jesper'}
                        matches={4}
                    />
                </ScrollView>
            </View>
        )
    }
}
