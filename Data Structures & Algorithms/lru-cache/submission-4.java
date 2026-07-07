class LRUCache {
    //brute force approach
    private final int capacity;
    private final Map<Integer, Integer>map; // key -> value
    private final LinkedList<Integer> order;   // tracks usage order (LRU at front)



    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<>();
        this.order = new LinkedList<>();
    }

    public int get(int key) {
    if (!map.containsKey(key)) {
        return -1;
    }    
    order.remove(Integer.valueOf(key));       // Must remove by value (Object)
    order.addLast(key);
    
    return map.get(key);
   }
    public void put(int key, int value) {
        //update existing
        if(map.containsKey(key)){
            map.put(key, value);
           order.remove(Integer.valueOf(key));
            order.addLast(key);
            return;
        }

        // add new one by removing lru 
        if(map.size()>=capacity){ 
            // Remove LRU (first element in order list)
            int lruKey= order.removeFirst();
            map.remove(lruKey);
        }
        map.put(key, value);
        order.addLast(key);


    }


}