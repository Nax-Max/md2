import { Md2Accordion } from './accordionpanel';
export declare class Md2AccordionHeader {
}
export declare class Md2AccordionTab {
    private _accordion;
    header: string;
    active: boolean;
    disabled: boolean;
    constructor(_accordion: Md2Accordion);
    /**
     * Toggle the accordion
     * @param event
     * @return if it is disabled
     */
    _handleClick(event: Event): void;
    /**
     * Find index of specific tab of accordion
     * @return index number of this tab
     */
    findTabIndex(): number;
}
