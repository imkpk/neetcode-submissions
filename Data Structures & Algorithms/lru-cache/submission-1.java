// import java.util.LinkedHashMap;
// import java.util.Map;

class LRUCache {
    //class for doubly linked list 
    // private class Node{
    //     int key, value;
    //     Node prev, next;

    //     Node(int key, int value){
    //         this.key=key;
    //         this.value= value;
    //     }
    // }
    private final int capacity; // capacity
    // private final Map<Integer, Node>map; // insertion 
    private final LinkedHashMap<Integer, Integer> cache;
    // private final Node tail; // most recent item 
    // private final Node head;// Least recent item;


    public LRUCache(int capacity) {
        this.capacity= capacity;
        // this.map= new HashMap<>();
        // head= new Node(0,0);
        // tail= new Node(0,0);
        // head.next= tail;
        // tail.prev=head;
        this.cache= new LinkedHashMap<Integer, Integer>(capacity, 0.75f, true){

            @Override
            protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest){
                return size()>LRUCache.this.capacity;
            }
        };
        
    }
    
    public int get(int key) {
        return cache.getOrDefault(key, -1);
        // if(!map.containsKey(key)){
        //     return -1;
    
        // }
        // Node node= map.get(key);
        // return node.value;

        
    }
    
    public void put(int key, int value) {
        cache.put(key, value);
        
    }
}
