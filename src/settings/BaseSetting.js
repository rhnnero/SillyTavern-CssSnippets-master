import { SettingAction } from './SettingAction.js';
import { SettingIcon } from './SettingIcon.js';

export class BaseSetting {
    /**
     * @param {object} props
     * @param {string} props.id
     * @param {string} props.name
     * @param {string} props.description
     * @param {*} props.initialValue
     * @param {string[]} props.category
     * @param {SettingAction[]} [props.actionList]
     * @param {SettingIcon[]} [props.iconList]
     * @param {()=>void} [props.onChange]
     */
    static fromProps(props) {
        return Object.assign(new this(), props);
    }




    /**@type {string} */ id;
    /**@type {string} */ name;
    /**@type {string} */ description;
    /**@type {string[]} */ category = [];
    /**@type {SettingAction[]} */ actionList = [];
    /**@type {SettingIcon[]} */ iconList = [];

    /**@type {*} */ initialValue;

    /**@type {HTMLElement} */ dom;

    /**@type {(src:BaseSetting)=>void} */ onChange;

    /**
     * @returns {*}
     */
    get value() {
        throw new Error('BaseSetting.value getter 尚未实现');
    }
    /**
     * @param {*} value
     */
    set value(value) {
        throw new Error('BaseSetting.value setter 尚未实现');
    }


    /**
     * @returns {HTMLElement}
     */
    render() {
        throw new Error('BaseSetting.render() 尚未实现');
    }
}
