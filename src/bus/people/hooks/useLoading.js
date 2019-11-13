import { useSelector } from 'react-redux';

export const useLoading = () => {
    const isDataLoading = useSelector(
        (state) => state.people.isDataFetching || state.person.isDataFetching
    );

    return {
        isDataLoading
    }
};