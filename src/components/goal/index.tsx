import { useEffect, useState } from 'react';
import {
    Box, NumberInput, NumberDecrementStepper, Button, Heading, Stack, Text,
    NumberIncrementStepper, NumberInputStepper, NumberInputField, Select
} from '@chakra-ui/react';
import { useCookies } from 'react-cookie'

function GoalChart(props: any) {
    const [cookies, setCookie] = useCookies(['goal'])

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const goal = {
            total: e.target.num.value,
            metric: e.target.metric.value,
            time: e.target.time.value
        }

        setCookie('goal', goal, { path: '/' })
    }

    return (
    <Box>
        <Box {...styles.main}>
            <Heading>What's your writing goal?</Heading>
            <form onSubmit={handleSubmit}>
                <Stack direction="row">

                    <NumberInput
                        {...styles.num}
                        defaultValue={50000}
                        min={0}
                        max={9999999}
                        step={100}
                        id="num"
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Select id="metric" width="fit-content" defaultValue="words">
                        <option value="words">words</option>
                        <option value="minutes">minutes</option>
                        <option value="hours">hours</option>
                        <option value="sessions">sessions</option>
                    </Select>
                    <Text>per</Text>
                    <Select id="time" defaultValue="monthly" width="fit-content">
                        <option value="day">day</option>
                        <option value="week">week</option>
                        <option value="month">month</option>
                        <option value="year">year</option>
                    </Select>
                </Stack>
                <Button type="submit">Submit</Button>
            </form>
        </Box>

        <Box {...styles.main}>
           <Heading>Your Goal Is:</Heading>
           <Text>
            { cookies.goal ?
            `${cookies.goal.total} ${cookies.goal.metric} in ${cookies.goal.time}`
            : "Currently undecided"}
            </Text>
        </Box>
    </Box>
    )
}

const styles = {
    wrapper: {

    },
    main: {
        shadow: "lg",
        width: "max-content",
        padding: "10px",
        borderRadius: "10px",
        margin: "10px auto",
    },

    num: {
        width: "120px",
    }
}

export default GoalChart;
