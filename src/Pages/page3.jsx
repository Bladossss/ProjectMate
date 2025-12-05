
import { FavoritesList } from '../Components/FavoritesList';

export function Page3() {
    return (
        <>
            <div>
                <h1 className='FavoriteHeader'>Избранное</h1>
                <div className='favoritesList'>
                    <FavoritesList />
                </div>
            </div>
        </>
    );
}


