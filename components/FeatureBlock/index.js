import React from 'react';
import PropTypes from 'prop-types';
import FeatureBlockWrapper, { IconWrapper, ContentWrapper, ButtonWrapper } from './featureBlock.style';

const FeatureBlock = ({
    className,
    icon,
    title,
    button,
    description,
    iconPosition,
    additionalContent,
    wrapperStyle,
    iconStyle,
    contentStyle,
    btnWrapperStyle,
    ...props
}) => {
    // Add all classs to an array
    const addAllClasses = ['feature__block'];

    // Add icon position class
    if (iconPosition) {
        addAllClasses.push(`icon_${iconPosition}`);
    }

    // className prop checking
    if (className) {
        addAllClasses.push(className);
    }

    // check icon value and add
    const Icon = icon && (
        <IconWrapper className="icon__wrapper" {...iconStyle}>
            {icon}
        </IconWrapper>
    );

    return (
        <FeatureBlockWrapper className={addAllClasses.join(' ')} {...wrapperStyle} {...props}>
            {Icon}

            {title || description || button ? (
                <>
                    <ContentWrapper className="content__wrapper" {...contentStyle}>
                        {title}
                        {description}
                        {button && (
                            <ButtonWrapper className="button__wrapper" {...btnWrapperStyle}>
                                {button}
                            </ButtonWrapper>
                        )}
                    </ContentWrapper>
                    {additionalContent}
                </>
            ) : (
                ''
            )}
        </FeatureBlockWrapper>
    );
};

FeatureBlock.propTypes = {
    /** ClassName of the FeatureBlock */
    className: PropTypes.string,

    /** title prop contain a react component. You can use our Heading component from reusecore */
    title: PropTypes.element,

    /** description prop contain a react component. You can use our Text component from reusecore */
    description: PropTypes.element,

    /** button prop contain a react component. You can use our Button component from reusecore */
    button: PropTypes.element,

    /** Set icon position of the FeatureBlock */
    iconPosition: PropTypes.oneOf(['top', 'left', 'right']),

    /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
     * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
    wrapperStyle: PropTypes.shape,

    /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
     * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
    iconStyle: PropTypes.shape,

    /** contentStyle prop contain these style system props: width, textAlign and space. */
    contentStyle: PropTypes.shape,

    /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
     * flexDirection and justifyContent. */
    btnWrapperStyle: PropTypes.shape,
    additionalContent: PropTypes.shape,
    icon: PropTypes.string,
};

FeatureBlock.defaultProps = {
    iconPosition: 'top',
    className: '',
    title: '',
    description: '',
    button: '',
    wrapperStyle: {},
    iconStyle: {},
    contentStyle: {},
    btnWrapperStyle: {},
    additionalContent: {},
    icon: '',
};

export default FeatureBlock;
