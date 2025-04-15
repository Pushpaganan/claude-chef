export default function RecipeSteps(){
    const style = "width: 100%; border-radius: 6px; margin-bottom: 20px;"
 return(
    <section>
        <div class="recipe">
        <h1>Delicious Chocolate Chip Cookies</h1>

        <img src="/public/soft-chewy-chocolate-chip-cookies.jpg" alt="Chocolate Chip Cookies" style={{style}}/>
        <p class="notes">A classic recipe for soft and chewy chocolate chip cookies that everyone will love!</p>

        <div class="ingredients">
            <h2>Ingredients</h2>
            <ul>
                <li>1 cup (2 sticks) unsalted butter, softened</li>
                <li>¾ cup granulated sugar</li>
                <li>¾ cup packed brown sugar</li>
                <li>2 large eggs</li>
                <li>1 teaspoon vanilla extract</li>
                <li>2 ¼ cups all-purpose flour</li>
                <li>1 teaspoon baking soda</li>
                <li>1 teaspoon salt</li>
                <li>1 cup (6 ounces) chocolate chips</li>
                <li>½ cup chopped nuts (optional)</li>
            </ul>
        </div>

        <div class="instructions">
            <h2>Instructions</h2>
            <ol>
                <li>Preheat oven to 375°F (190°C).</li>
                <li>In a large bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy.</li>
                <li>Beat in the eggs one at a time, then stir in the vanilla extract.</li>
                <li>In a separate medium bowl, whisk together the flour, baking soda, and salt.</li>
                <li>Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Be careful not to overmix.</li>
                <li>Stir in the chocolate chips and nuts (if using).</li>
                <li>Drop rounded tablespoons of dough onto ungreased baking sheets, leaving about 2 inches between cookies.</li>
                <li>Bake for 9-11 minutes, or until the edges are golden brown and the centers are still slightly soft.</li>
                <li>Let the cookies cool on the baking sheets for a few minutes before transferring them to a wire rack to cool completely.</li>
                <li>Enjoy!</li>
            </ol>
        </div>

        <div class="notes">
            <p><strong>Tips for perfect cookies:</strong></p>
            <ul>
                <li>Use room temperature butter for best creaming.</li>
                <li>Don't overmix the dough to keep the cookies tender.</li>
                <li>For chewier cookies, slightly underbake them.</li>
                <li>Store cooled cookies in an airtight container at room temperature for up to 3 days.</li>
            </ul>
        </div>
    </div>
    </section>
 )   
}