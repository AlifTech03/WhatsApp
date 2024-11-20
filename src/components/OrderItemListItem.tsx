import { View, Text, Image } from 'react-native';
import React from 'react';
import { OrderItem } from '../constants/types';

type orderItemProps = {
    orderItem: OrderItem
}

const OrderItemListItem = ({orderItem}: orderItemProps) => {
  return (
    <View className="flex-row items-center justify-center rounded-lg bg-white  p-3 shadow-sm shadow-black">
      <View className="flex-1 flex-row items-center gap-3">
        <Image
          className="aspect-square w-20 rounded-full"
          source={{ uri: orderItem.products.image! }}
          resizeMode="contain"
        />
        <View>
          <Text className="text-xl font-bold">{orderItem.products.name}</Text>
          <View className="mt-2 flex-row gap-3">
            <Text className="text-lg font-bold text-blue-900">${orderItem.products.price}</Text>
            <Text className="text-lg font-semibold">Size: {orderItem.size}</Text>
          </View>
        </View>
      </View>
      <Text className="text-xl font-bold">{orderItem.quantity}</Text>
    </View>
  );
};

export default OrderItemListItem;