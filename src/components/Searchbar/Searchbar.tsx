import React from 'react';
import { VStack, Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

interface SearchbarProps {}

const Searchbar: React.FunctionComponent<SearchbarProps> = () => {
  return (
    <VStack width='100%' space={2} px={4} py={3} shadow={5}>
      <Input
        placeholder='Search'
        bg='#fff'
        width='100%'
        borderRadius={4}
        py={3}
        px={2}
        fontSize={16}
        _web={{
          _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } }
        }}
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
          />
        }
      />
    </VStack>
  );
};

export default Searchbar;
