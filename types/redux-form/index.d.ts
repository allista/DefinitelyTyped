// Type definitions for redux-form 8.2
// Project: https://github.com/erikras/redux-form, https://redux-form.com
// Definitions by: Daniel Lytkin <https://github.com/aikoven>
//                 Karol Janyst <https://github.com/LKay>
//                 Luka Zakrajsek <https://github.com/bancek>
//                 Alex Young <https://github.com/alsiola>
//                 Anton Novik <https://github.com/tehbi4>
//                 Huw Martin <https://github.com/huwmartin>
//                 Matt Davis <https://github.com/m-b-davis>
//                 Ethan Resnick <https://github.com/ethanresnick>
//                 Maddi Joyce <https://github.com/maddijoyce>
//                 Kamil Wojcik <https://github.com/smifun>
//                 Mohamed Shaaban <https://github.com/mshaaban088>
//                 Ethan Setnik <https://github.com/esetnik>
//                 Walter Barbagallo <https://github.com/bwlt>
//                 Kota Marusue <https://github.com/mrsekut>
//                 Adam Bouqdib <https://github.com/abemedia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0
import {
  ComponentClass,
  StatelessComponent,
  ReactElement
} from "react";

export type FieldType = "Field" | "FieldArray";

export interface ErrorOther<T = string> {
    _error?: T;
}

export type FormErrors<FormData = {}, T = string> = {
    [P in keyof FormData]?: FormData[P] extends Array<infer Pi>
        ? Array<FormErrors<Pi>> | ErrorOther<T>
        : ReactElement | T | FormErrors<FormData[P]>;
} & ErrorOther<T>;

export interface WarningOther<T = void> {
    _warning?: T;
}

export type FormWarnings<FormData = {}, T = string> = {
    [P in keyof FormData]?: FormData[P] extends Array<infer Pi>
        ? Array<FormWarnings<Pi>> | WarningOther<T>
        : ReactElement | T | FormWarnings<FormData[P]>;
} & WarningOther<T>;

export interface RegisteredFieldState {
    name: string;
    type: FieldType;
}

export type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

export * from "./lib/reduxForm";
export * from "./lib/Field";
export * from "./lib/Fields";
export * from "./lib/FieldArray";
export * from "./lib/Form";
export * from "./lib/FormName";
export * from "./lib/FormSection";
export * from "./lib/formValues";
export * from "./lib/formValueSelector";
export * from "./lib/reducer";
export * from "./lib/SubmissionError";
export * from "./lib/actions";
export * from "./lib/actionTypes";
export * from "./lib/selectors";
