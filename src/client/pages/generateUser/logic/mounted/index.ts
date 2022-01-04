import { getStorage } from '../../../../utils/storage';

export async function mounted() {
    this.haveUser = getStorage('user');
    Array.isArray(this.haveUser)
        ? this.haveUser = false
        : this.haveUser = true
}