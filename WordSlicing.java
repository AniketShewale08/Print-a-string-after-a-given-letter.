import java.util.*;

public class WordSlicing {

    int findIndex(String sentence, String letter){
        int count = 0;
        for(int i = 0; i < sentence.length(); i++){
            if(sentence.charAt(i) == letter.charAt(0)){
                count++;
                return count;
            }
            count++;
        }
        return -1;
    }

    String wordSlice(String sentence, String letter) {

        // If the both the inputs are empty.
        if(sentence.length() == 0 && letter.length() == 0){
            return "Both the sentence and the letter are empty.";
        }
        // If one of the input is empty.
        if(letter.length() == 0 || sentence.length() == 0){
            return "The letter does not exist in the sentense.";
        }
        
        // findIndex method is used to find the index of the letter in the sentence.
        int index;
        index = findIndex(sentence, letter);
        
        /*  
            If index holds a value which is greater than or equal to zero, 
            then the letter we are searching for is within the string, so it will run the if statement.
        */

        // If not, it will return the letter that is not in the sentence.
        
        if(index >= 0){
            return sentence.substring(index);
        }
        return "The letter does not exist in the sentense."; 
    }

    public static void main(String[] args) {
        
        Scanner scan = new Scanner(System.in);

        WordSlicing wordS = new WordSlicing();

        String sentence;
        String letter;

        // Taking input from the user.
        System.out.print("1. Enter a Sentence: ");
        sentence = scan.nextLine();
        
        System.out.print("2. Enter a Letter: ");
        letter = scan.nextLine();

        String s = wordS.wordSlice(sentence, letter);
        System.out.println("Result: " + s);
        scan.close();
    }
}
