import React from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
    Table,
    Tbody,
    Box,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Tr,
    Text,
    TableContainer,
  } from '@chakra-ui/react';





function TableBookings() {
    const [bookings, setBookings] = useState([]);

    const handleSubmit = (values) => {
        const newBooking = {
            date: values.date,
            time: values.time,
            partySize: values.partySize,
        };

        setBookings([...bookings, newBooking]);
    };

    return (
        <Box margin={70} paddingRight={9}>
            <Formik
                initialValues={{ date: "", time: "", partySize: "" }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Flex>
                            <FormControl>
                                <FormLabel htmlFor="date">Date</FormLabel>
                                <Field
                                    as={Input}
                                    type="date"
                                    name="date"
                                    placeholder="Select a date" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="time">Time</FormLabel>
                                <Field as={Input} type="time" name="time" placeholder="Select a time" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="partySize">Party Size</FormLabel>
                                <Field as={Select} name="partySize" placeholder="Select party size">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </Field>
                            </FormControl>
                            <Button type="submit" isLoading={isSubmitting} backgroundColor={"#F4CE14"} size="xl" padding={3}n marginLeft={4}>
                                Book Table
                            </Button>
                        </Flex>
                    </Form>
                )}
            </Formik>
            <TableContainer>
            <Table variant='striped'>
                <Tbody>
                    {bookings.map((booking, index) => (
                        <Tr key={index}>
                            <Box>
                                <Text>{booking.date}</Text>
                            </Box>
                            <Box>
                                <Text>{booking.time}</Text>
                            </Box>
                            <Box>
                                <Text>{booking.partySize}</Text>
                            </Box>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </TableContainer>
        </Box>
    );
}

export default TableBookings;
