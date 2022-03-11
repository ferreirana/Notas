import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilo from './Style';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';


export default ({ navigation }) => (
    <SafeAreaView style={estilo.container}>
        <View style={estilo.Header}>
            <Text style={estilo.HeaderTxt}>Notas</Text>
            <Icon name="magnifying-glass" type='entypo' color='#FFF' style={estilo.IconHomeSource} />
                <TouchableOpacity onPress={() => navigation.navigate('Note')}>  
                    <View>
                        <Icon name="plus" type='antdesign' color='#FFF' style={estilo.IconHomePlus} />  
                    </View>
                </TouchableOpacity>
        </View>
        <View style={estilo.Squares}>
            <View style={[estilo.box, 
                { 
                zIndex: 4,
                }]}></View>
            <View style={[estilo.box, 
                {
                zIndex: 3,
                bottom: 75,
                }]}></View>

            <View style={[estilo.box, 
                { 
                zIndex: 2,
                bottom: 150,
                backgroundColor: '#0043CE',
                }]}></View>
            <View style={[estilo.box, 
                { 
                zIndex: 1,
                bottom: 225,
                }]}></View>
            <View style={[estilo.box, 
                { 
                bottom: 300,
                }]}></View>    
        </View>
        
        <View style={estilo.containerTxt}>
            <Text style={estilo.txtSemNotas}>Não tem nenhuma nota aqui</Text>
            <Text style={estilo.subtitle}>Crie notas e você poderá vê-las aqui.</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Note')}>
            <View style={estilo.notas}>
                 <Icon name="plus" type='antdesign' color='#FFF' style={estilo.IconBottomPlus} />
            </View>

        </TouchableOpacity>
     </SafeAreaView>
);
