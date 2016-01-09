import * as React  from 'react';
import {PopoverTrigger, Popover} from 'amazeui-react';

interface Props { tooltip?: any, children?: any, href?: any }

export default class LinkTooltip extends React.Component<Props, {}> {
    render() {
        var tooltip = <Popover amSize="sm">{this.props.tooltip}</Popover>;

        return (
            <PopoverTrigger
                placement="bottom"
                popover={tooltip}
                delayOpen={300}
                delayClose={150}>
                <a
                    href={this.props.href}>
                    {this.props.children}
                </a>
            </PopoverTrigger>
        );
    }
}
