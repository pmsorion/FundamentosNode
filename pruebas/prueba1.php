function almostIncreasingSequence($sequense) {
    $mistakes = 0;

    for ($i = 0; i < count($sequense)-1; $i++) {
        if($sequense[$i] >= $sequense[$i+1]) {
            if(count($sequense) > $i+2 && $sequense[$i] >= $sequense[$i+2] && $i > 0 && $sequense[$i-1] >= $sequense[$i+1]) {
                return false;
            }
            else
                $mistakes++;
        }
        if ($mistakes > 1)
            return false;
    }
    return true;
}