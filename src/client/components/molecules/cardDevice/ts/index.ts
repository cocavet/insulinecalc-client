import '../styles/index.scss';

import { components } from "../vue/components";
import { functions } from "../vue/functions";
import { watchers } from "../vue/watchers";
import { mounted } from "../vue/mounted";
import { data, props } from "../vue/data";

export const DATA = data;
export const COMPONENTS = components;
export const PROPS = props;
export const METHODS = functions;
export const WATCH = watchers;
export const MOUNTED = mounted;