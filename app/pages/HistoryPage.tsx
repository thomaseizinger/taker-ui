import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/core';
// import { Link } from 'react-router-dom';
// import Order from '../components/Order';

export default function HistoryPage() {
  return (
    <Box width="100%">
      <Heading fontSize="1.8em" mb={8}>
        History
      </Heading>

      <Text>TODO: no GET /swaps endpoint</Text>
      {/* <Link to="/swaps/1">
        <Order status="Pending" />
      </Link>

      <Order status="Failed" />
      <Order status="Success" /> */}
    </Box>
  );
}
