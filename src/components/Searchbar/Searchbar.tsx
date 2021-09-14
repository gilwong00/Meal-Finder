import React, { useContext } from 'react';
import { VStack, Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { LocationContext } from '../../context/LocationContext';

const Searchbar = () => {
  const { searchTerm, handleSearch, setSearchTerm } =
    useContext(LocationContext);

  return (
    <VStack width='100%' space={2} px={4} py={3} shadow={5}>
      <Input
        placeholder='Search for a location'
        bg='#fff'
        width='100%'
        borderRadius={4}
        py={3}
        px={2}
        fontSize={16}
        _web={{
          _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } }
        }}
        value={searchTerm}
        InputLeftElement={
          <Icon
            size='sm'
            m={2}
            color='gray.400'
            as={<MaterialIcons name='search' />}
          />
        }
        InputRightElement={
          <Icon
            size='sm'
            m={2}
            color='gray.400'
            as={<MaterialIcons name='close' />}
            onPress={() => setSearchTerm('')}
          />
        }
        onChangeText={(text: string) => setSearchTerm(text)}
        onSubmitEditing={() => handleSearch(searchTerm)}
      />
    </VStack>
  );
};

export default Searchbar;
