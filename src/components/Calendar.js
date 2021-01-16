import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import { View, Button, Text } from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

const Calendar = ({navigation}) => {

    const [events, setEvents] = useState({});

    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };

    const loadEvents = (day) => {
        // const newEvents = {};
        setTimeout(() => {
            for(let i=-15; i<85; i++) {
                const time = day.timestamp + i*24*60*60*100;
                const strTime = timeToString(time);
                // console.log(day);
                // console.log(day.timestamp);
                
                if(!events[strTime]) {
                    events[strTime] = [];
                    const numEvents = Math.floor(Math.random()*3+1);
                    for(let j=0; j<numEvents; j++) {
                        events[strTime].push({
                            name: 'Item for '+strTime+' #'+(j+1),
                            height: Math.max(50, Math.floor(Math.random() * 150)), 
                        });
                    }
                }
            }
            const newEvents = {};
            Object.keys(events).forEach((key) => {
                newEvents[key] = events[key];
            });
            setEvents(newEvents);
        }, 1000);
    };

    const renderEvent = (event) => {
        return (
            <TouchableOpacity style={{marginRight:10, marginTop:17}}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection:'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flex:1,
                            }}
                        >
                            <Text>{event.name}</Text>
                            <Avatar.Text label='A' />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{flex:1}}>
            <Agenda 
                items={events}
                loadItemsForMonth={loadEvents}
                selected={'2020-11-12'}
                renderItem={renderEvent}
            />
        </SafeAreaView>
    );
};

export default Calendar;