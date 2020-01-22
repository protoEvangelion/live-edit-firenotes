import * as React from 'react';
import { styled } from '@/style';
import { Flex, Span } from '@/components/atoms';

const StyledSpan = styled(Span)`
    position: absolute;
    left: 70%;
    opacity: ${props => (props.visible ? '1' : '0')};
    visibility: ${props => (props.visible ? 'visble' : 'hidden')};
    transition: color 0.3s, opacity 0.3s, visibility 0.3s;
`;

const StyledFlex = styled(Flex)`
    cursor: pointer;
    flex-grow: 1;
    position: relative;
`;

const base = 0.25;

const Circle = styled.div`
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: opacity 0.3s;
    width: ${base}rem;
    height: ${base}rem;
    background-color: #fff;
    box-shadow: 0 0 ${base * 1.5}rem ${base * 1.333}rem #fff,
        /* inner white */ 0 0 ${base * 2.5}rem ${base * 1.5}rem #f0f,
        /* middle magenta */ 0 0 ${base * 3.5}rem ${base * 2.25}rem #0ff; /* outer cyan */

    opacity: ${props => {
        if (
            (props.isSidebarActive && props.isHovered) ||
            (!props.isSidebarActive && props.currentFrame === props.frame)
        ) {
            return 1;
        }
        return 0.35;
    }};
`;

export class SidebarNavItem extends React.Component {
    state = { isHovered: false };

    handleMouseEnter = e => {
        this.props.updateCoordinates(e.currentTarget.getBoundingClientRect());
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    render() {
        return (
            <StyledFlex
                onClick={() => this.props.handleClick(this.props.frame)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                width={0.99}
                alignItems="center"
                justifyContent="center"
                tabIndex="1"
            >
                <Circle
                    currentFrame={this.props.currentFrame}
                    frame={this.props.frame}
                    isHovered={this.state.isHovered}
                    isSidebarActive={this.props.isSidebarActive}
                />

                <StyledSpan
                    color={this.state.isHovered ? 'white' : 'gray'}
                    visible={this.props.isSidebarActive}
                >
                    {`0${this.props.frame}`}
                </StyledSpan>
            </StyledFlex>
        );
    }
}
