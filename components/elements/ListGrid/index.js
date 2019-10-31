import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Button from '../Button';
import Loader from '../Loader';
import Text from '../Text';

const LoadMore = ({
    handleLoadMore,
    showButton,
    buttonText,
    buttonVariant,
    loaderColor,
    loading,
    loadMoreComponent,
    loadMoreWrapperStyle,
    loadMoreButtonStyle,
}) => {
    return (
        <>
            {showButton ? (
                <Box {...loadMoreWrapperStyle}>
                    {loadMoreComponent || (
                        <Button
                            variant={buttonVariant}
                            title={buttonText || 'Load More'}
                            isLoading={loading}
                            loader={<Loader loaderColor={loaderColor} />}
                            onClick={handleLoadMore}
                            {...loadMoreButtonStyle}
                        />
                    )}
                </Box>
            ) : null}
        </>
    );
};
LoadMore.propTypes = {
    handleLoadMore: PropTypes.func,
    showButton: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonVariant: PropTypes.string,
    loaderColor: PropTypes.string,
    loading: PropTypes.bool,
    loadMoreComponent: PropTypes.element,
    loadMoreWrapperStyle: PropTypes.shape,
    loadMoreButtonStyle: PropTypes.shape,
};

LoadMore.defaultProps = {
    handleLoadMore: {},
    showButton: false,
    buttonText: '',
    buttonVariant: '',
    loaderColor: '',
    loading: false,
    loadMoreComponent: {},
    loadMoreWrapperStyle: {},
    loadMoreButtonStyle: {},
};

const ListGrid = ({
    data = [],
    component,
    columnWidth,
    postCount,
    buttonVariant,
    loadMoreButtonStyle,
    loaderColor,
    totalPost,
    pagination,
    paginationComponent,
    handleLoadMore,
    loadMoreComponent,
    infinityScroll,
    placeholder,
    loading,
    limit,
    buttonText,
    componentWrapperStyle,
    componentContainerStyle,
    loadMoreWrapperStyle,
    paginationWrapperStyle,
}) => {
    const Limit = limit ? Number(limit) : 1;
    const limits = [];
    for (let i = 0; i < Limit; i += 1) {
        limits.push(i);
    }
    // const grabPostNumber = data.length;
    const showButton = postCount < totalPost;

    return (
        <>
            <Box {...componentWrapperStyle}>
                {data.length ? (
                    <>
                        {data.map((item, index) => (
                            <Box width={columnWidth} key={item.id} {...componentContainerStyle}>
                                {component(item, index)}
                            </Box>
                        ))}
                    </>
                ) : null}
                {loading && (
                    <>
                        {limits.map(index => (
                            <Box width={columnWidth} key={index} {...componentContainerStyle}>
                                {placeholder || <Text content="Loading ..." />}
                            </Box>
                        ))}
                    </>
                )}
            </Box>
            {postCount < totalPost && (
                <LoadMore
                    showButton={showButton}
                    handleLoadMore={handleLoadMore}
                    loading={loading}
                    buttonText={buttonText}
                    buttonVariant={buttonVariant}
                    loaderColor={loaderColor}
                    loadMoreComponent={loadMoreComponent}
                    loadMoreButtonStyle={loadMoreButtonStyle}
                    loadMoreWrapperStyle={loadMoreWrapperStyle}
                />
            )}
            {paginationComponent && <Box {...paginationWrapperStyle}>{paginationComponent}</Box>}
        </>
    );
};

ListGrid.propTypes = {
    postCount: PropTypes.number,
    buttonVariant: PropTypes.string,
    loadMoreButtonStyle: PropTypes.shape,
    loaderColor: PropTypes.string,
    data: PropTypes.arrayOf.isRequired,
    totalPost: PropTypes.number,
    component: PropTypes.func.isRequired,
    columnWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
    pagination: PropTypes.bool,
    paginationComponent: PropTypes.element,
    handleLoadMore: PropTypes.func,
    loadMoreComponent: PropTypes.element,
    infinityScroll: PropTypes.bool,
    placeholder: PropTypes.element,
    loading: PropTypes.bool,
    limit: PropTypes.number,
    buttonText: PropTypes.string,
    listWrapperStyle: PropTypes.shape,
    componentWrapperStyle: PropTypes.shape,
    componentContainerStyle: PropTypes.shape,
    loadMoreWrapperStyle: PropTypes.shape,
    loadMoreStyle: PropTypes.shape,
    paginationWrapperStyle: PropTypes.shape,
};

ListGrid.defaultProps = {
    postCount: 0,
    buttonVariant: '',
    loadMoreButtonStyle: {},
    loaderColor: '',
    totalPost: '',
    columnWidth: '',
    pagination: false,
    paginationComponent: {},
    handleLoadMore: {},
    loadMoreComponent: {},
    infinityScroll: false,
    placeholder: {},
    loading: false,
    limit: 0,
    buttonText: '',
    listWrapperStyle: {},
    loadMoreStyle: {},
    paginationWrapperStyle: {},
    componentWrapperStyle: {
        flexBox: true,
        flexWrap: 'wrap',
        mr: '-1rem',
        ml: '-1rem',
    },
    componentContainerStyle: {
        pr: '1rem',
        pl: '1rem',
    },
    loadMoreWrapperStyle: {
        flexBox: true,
        justifyContent: 'center',
        mt: '1rem',
    },
};

export default ListGrid;
