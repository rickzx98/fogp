export class FluidFragment {
    static ROOT_FRAGMENT_ID = "$$root_fragment";
    constructor(fragmentId,
        fragments = {},
        fragmentType = "div",
        fragmentProps = {}, containerProps = {}) {
        this.fragmentId = fragmentId;
        this.fragments = fragments;
        this.fragmentType = fragmentType;
        this.fragmentProps = fragmentProps;
        this.containerProps = containerProps;
    }
    withFragment(fragment) {
        this.fragments[fragment.fragmentId] = fragment;
        return this;
    }
}

export class FragmentLayout {

    
}