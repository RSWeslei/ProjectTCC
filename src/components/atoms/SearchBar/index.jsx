import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../utils/globalColors';
import styles from './style';

const SearchBar = ({ onSearch, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSearch = (query) => {
        if (onSearch) onSearch(query);
        Keyboard.dismiss();
    };

    const handleClear = () => {
        setSearchQuery('');
        handleSearch('');
        if (onClose) onClose();
    };

    return (
        <View style={styles.container}>
            <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder="Buscar..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={() => handleSearch(searchQuery)}
                returnKeyType="search"
            />
            <TouchableOpacity onPress={() => handleSearch(searchQuery)} style={styles.searchButton}>
                <Icon name="search" size={20} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClear} style={styles.closeButton}>
                <Icon name="close" size={20} color={colors.white} />
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;
