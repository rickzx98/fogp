export class FluidFragment {
    static ROOT_FRAGMENT_ID = "$$root_fragment";
    constructor(fragmentId,
        fragments = {},
        fragmentType = "div",
        fragmentProps = {}) {
        this.fragmentId = fragmentId;
        this.fragments = fragments;
        this.fragmentType = fragmentType;
        this.fragmentProps = fragmentProps;
    }
    withFragment(fragment) {
        this.fragments[fragment.fragmentId] = fragment;
        return this; 
    }
}