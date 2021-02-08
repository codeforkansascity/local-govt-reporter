
declare module '@salesforce/design-system-react'  {
    import { Component, CSSProperties } from "react";
    import { Moment } from 'moment';

    interface RadioProps {
        key: string;
        id: string;
        labels?: {
            heading?: string;
            label: string;
        };
        value: string;
        checked: bool;
        variant: 'base' | 'button-group' |'swatch' | 'visual-picker';
    }

    export class Radio extends Component<RadioProps>{}

    interface RadioButtonGroupProps {
        className: string | string[];
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    }

    export class RadioButtonGroup extends Component<RadioButtonGroupProps>{}

    interface DatepickerDate {
        date: Date,
        formattedDate: string,
        timezoneOffset: number
    }

    interface DatepickerProps {
        className: string | string[];
        onChange: (event: ChangeEvent<HTMLInputElement>, data: DatepickerDate) => void;
        onCalendarFocus: (event: ChangeEvent<HTMLInputElement>, data: DatepickerDate) => void;
        formatter: (date:(Date | string)) => void;
        parser: (dateString: string) => void;
        value: Date | Moment;
    }

    export class Datepicker extends Component<DatepickerProps>{};

    interface DropdownProps {
        className: string | string[];
        align: 'center'| 'left' | 'right';
        iconCategory?: 'action' | 'custom' | 'doctype' | 'standard' | 'utility';
        iconName?: PropTypes.string;
        iconPosition?: 'left' | 'right';
        label: string | JSX.Element;
        options: {label: string, value: string}[];
        style?: CSSProperties;

    };

    export class Dropdown extends Component<DropdownProps>{};

    interface ButtonProps {
        className: string | string[];
        variant: 
            'base' |
            'link' |
            'neutral' |
            'brand' |
            'outline-brand' |
            'destructive' |
            'success' |
            'text-destructive' |
            'icon';
        style?: CSSProperties;
    }

    export class Button extends Component<ButtonProps>{};
};
