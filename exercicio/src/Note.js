import React, { useState, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, keyboardVerticalOffset, ScrollView, keyboardType, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';
import estilo from "./Style"
import MaskInput, { Masks } from 'react-native-mask-input';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';




export default ({ navigation }) => {
    const [text, onChangeText] = React.useState(null);
    const [data, setDate] = useState('');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    const showDatepicker = () => {
        showMode('date');
    }

    
    const [open, setOpen] = useState(false);
    const [prioridade, setPrioridade] = useState(null);
    const [items, setItems] = useState([
        {key: 1, label: 'Urgente', value: 'Urgente'},
        {key: 2, label: 'Alta', value: 'Alta'},
        {key: 3, label: 'Média', value: 'Média'},
        {key: 4, label: 'Baixa', value: 'Baixa'},
    ]);



    return (
        <KeyboardAvoidingView behavior='height' style={estilo.container} keyboardVerticalOffset={keyboardVerticalOffset}>
                <SafeAreaView style={estilo.container}>
                    <View style={estilo.Header}>
                        <Text style={estilo.HeaderTxt}>Criar nota</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>  
                                <View>
                                    <Icon name="plus" type='antdesign' color='#FFF' style={estilo.IconHomePlus} />  
                                </View>
                            </TouchableOpacity>
                    </View>

                    <ScrollView style={ estilo.bodyNota }>
                        <View style={estilo.containerNota}>
                            <Text style={estilo.titleNota}> Nome da nota (obrigatório) </Text>
                            <TextInput style={estilo.textInput} onChangeText={()=>false} keyboardType={'default'} value ={text} placeholder="Insira"/>
                        </View>
                        <View style={estilo.containerNota}>
                            <Text style={estilo.titleNota}> Descrição </Text>
                            <TextInput style={[estilo.textInput, {height: 150, textAlignVertical: 'top'}]} onChangeText={()=>false} keyboardType={'default'} value ={text} placeholder="Insira" />
                        </View>
                        <View style={estilo.containerNota}>
                            <Text style={estilo.titleNota}> Prioridade </Text>
                            <DropDownPicker style=
                            {estilo.prioridade} open={open} value={prioridade} items={items} setOpen={setOpen} setValue={setPrioridade} setItems={setItems} listMode="SCROLLVIEW" defaultNULL placeholder='Escolha' dropDownContainerStyle={estilo.dropPicker}  />
                        </View>
                        <View style={estilo.containerNota}>
                            <Text style={estilo.titleNota}> Data </Text>
                            <View style={{flexDirection:'row'}}>
                                <MaskInput style={estilo.dataInput} onChangeText={datas => setDate(datas)} value={data} mask={Masks.DATE_DDMMYYYY} placeholder="dd/mm/yyyy" keyboardType='numeric'/>
                                <TouchableOpacity onPress={showDatepicker}>
                                    {show && (<DateTimePicker value={new Date()} is24Hour={true} display="default" onChange={onChange} />)}
                                    <Icon name='calendar' type='font-awesome-5' size={26} color='#8D8D8D' style={estilo.iconCalendar} />
                                </TouchableOpacity>
                            </View>  
                        </View>
                        <View style={estilo.containerNota}>
                            <Text style={estilo.titleNota}> Lista de tarefas </Text>
                            <TextInput style={[estilo.textInput, {height: 150, textAlignVertical: 'top'}]} onChangeText={()=>false} keyboardType={'default'} value ={text} placeholder="Insira" />
                        </View>

                    </ScrollView>  

                    {/* <View style={estilo.footer}>
                        <Text style={estilo.txtFooter}>Criar nota</Text>
                    </View>  */}
                </SafeAreaView>
        </KeyboardAvoidingView>
    );
};


 