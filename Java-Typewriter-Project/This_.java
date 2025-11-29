public class This_ {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("This Is For You\n"); // title

        String[] lyrics = {
            "Main ab kyun hosh mein aata nahi?",
            "Sukoon yeh dil kyun pata nahi?",
            "Kyun toddun khud se jo the vade...",
            "Ke ab yeh ishq nibhaana nahi?",
            "Main mourn tumse jo yeh chehra...",
            "Dobara nazar milna nahi...",
            "Yeh duniya jaane mera dard...",
            "Tujhe yeh nazar kyun aata nahi?"
        };

        for (String line : lyrics) {
            typeLine(line);
            // Thread.sleep for line removed
        }
    }

    public static void typeLine(String text) throws InterruptedException {
        for (char ch : text.toCharArray()) {
            System.out.print(ch);
            Thread.sleep(70); // typewriter effect per character
        }
        System.out.println();
    }
}
