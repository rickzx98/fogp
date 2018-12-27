export class FluidFragment {
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
        return this; $
    }
}