export const functions = {
    goToNav
}

function goToNav(nav) {
    this.activeNav = nav;
    this.$emit('changeNav', nav);
}