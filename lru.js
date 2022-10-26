class LRUCache {
    constructor(size) {
            this.size = size || 3
            this.cache = new Map() //dung ES6
        }
        /* PUT: them du lieu vao
        - tim key trong redis
         */
    put(key, val) {
            const hasKey = this.cache.has(key);
            if (hasKey) {
                this.cache.delete(key);
            }
            this.cache.set(key, val);
            if (this.cache.size > this.size) {
                // [1,2,3] next() 1, next() 2
                // this.cache.keys() -> lay tat ca cac key
                this.cache.delete(this.cache.keys().next().value)
            }
            return true


        }
        /*
        GET: tim kiem du lieu
        - Kiem tra  trong redis
        - khong co tra ve -1
        - co thi xoa key di va tao lai (key len dau)
         */
    get(key) {
            const hasKey = this.cache.has(key);
            if (hasKey) {
                const val = this.cache.get(key);
                this.cache.delete(key);
                this.cache.set(key, val);
                return val;
            }
            return -1;
        }
        // lay cac phan tu
    items() {
        return this.cache.entries();
    }

}